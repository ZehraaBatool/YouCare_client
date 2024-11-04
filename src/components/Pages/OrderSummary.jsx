import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSummary.css';

const OrderSummary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderDetails } = location.state || {};
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [shipmentDetails, setShipmentDetails] = useState(null);
    if (orderDetails && orderDetails.items) {
        console.log(orderDetails.items.map(item => item.image)); // Log image URLs
    }

    if (!orderDetails) {
        return <p className="error-message">No order details available.</p>;
    }

    const handleConfirmOrder = async () => {
        setLoading(true);
        setError(null);

        const payload = {
            username: orderDetails.fullName,
            phoneno: orderDetails.phoneNumber,
            products: orderDetails.items.map(item => ({
                name: item.name,
                quantity: item.quantity,
                productId: item.productId,
                image: item.image,
                price: item.price,
            })),
            total_amount: orderDetails.totalAmount,
            email: orderDetails.email,
            address: orderDetails.address,
            city: orderDetails.city,
            zip_code: orderDetails.zipCode,
        };

        try {
            const response = await fetch('https://you-care-server.vercel.app/skincare/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Failed to confirm order');
            }

            const data = await response.json();
            setShipmentDetails(data.shipment);
            alert('Order confirmed successfully!');
        } catch (err) {
            console.error('Error confirming order:', err);
            setError('An error occurred while confirming the order.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="order-summary-container">
            <h2 className="order-summary-title">Order Summary</h2>
            <div className="order-summary-details">
                <div className="customer-details">
                    <p><strong>Name:</strong> {orderDetails.fullName}</p>
                    <p><strong>Email:</strong> {orderDetails.email}</p>
                    <p><strong>Phone:</strong> {orderDetails.phoneNumber}</p>
                    <p><strong>Address:</strong> {orderDetails.address}, {orderDetails.city} - {orderDetails.zipCode}</p>
                
                <hr/>
                <br/>
                <h3>Items Ordered</h3>
                <ul className="item-list">
                {orderDetails.items.map((item) => (
                    <li key={item.productId} className="item">
                   <img src={item.image} className="item-image" />
                    <div className="item-info">
                        <p>{item.name}</p>
                        <span>Qty: {item.quantity}</span>
                        <span>Price: Rs. {item.price}</span> {/* Display each item's price */}
                    </div>
                    </li>
                ))}
                </ul>
                </div>

            </div>
            <div className="order_summary_total">
                <p><strong>Total Amount:</strong> Rs.{orderDetails.totalAmount}</p>
            </div>
            <button
                className="confirm-order-button"
                onClick={handleConfirmOrder}
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Confirm Order'}
            </button>
            {error && <p className="error-message">{error}</p>}

            {shipmentDetails && (
                <div className="shipment-details">
                    <h3>Shipment Details</h3>
                    <p><strong>Shipping ID:</strong> {shipmentDetails.shipping_id}</p>
                    <p><strong>Shipment Date:</strong> {new Date(shipmentDetails.shipment_date).toLocaleDateString()}</p>
                    <p><strong>Delivery Date:</strong> {new Date(shipmentDetails.delivery_date).toLocaleDateString()}</p>
                    <p><strong>Tracking Number:</strong> {shipmentDetails.tracking_number}</p>
                </div>
            )}
        </div>
    );
};

export default OrderSummary;
