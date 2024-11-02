import React, { useState, useEffect } from 'react';
import '../components/Pages/AdminPage.css';

const OrderDetails = () => {
    const [orders, setOrders] = useState([]);
    const [searchOrderID, setSearchOrderID] = useState('');
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    // Fetch all orders
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:5000/skincare/orderDetails');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    // Fetch order by order_id
    const searchOrder = async () => {
        try {
            const response = await fetch(`http://localhost:5000/skincare/orderDetails/${searchOrderID}`);
            if (response.status === 404) {
                setSelectedOrder(null);
                throw new Error('Order not found');
            }
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSelectedOrder(data.length > 0 ? data[0] : null);
            setIsModalOpen(true); // Open the modal on order selection
        } catch (error) {
            console.error('Error fetching order:', error);
        }
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    return (
        <div className="order-details-container">
            <h3>Order Details</h3>

            {/* Search Order Form */}
            <div className="search-order">
                <input
                    type="text"
                    placeholder="Enter Order ID"
                    value={searchOrderID}
                    onChange={(e) => setSearchOrderID(e.target.value)}
                />
                <button onClick={searchOrder}>Search</button>
            </div>

            {/* Order Table */}
            <div className="table-wrapper">
                <div className="order-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer ID</th>
                                <th>Product Name</th>
                                <th>Username</th>
                                <th>Total Amount</th>
                                <th>Total Quantity</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Address</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.order_id}>
                                    <td>{order.order_id}</td>
                                    <td>{order.customer_id}</td>
                                    <td>{order.product_name}</td>
                                    <td>{order.username}</td>
                                    <td>{order.total_amount}</td>
                                    <td>{order.total_quantity}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phoneno}</td>
                                    <td>{order.address}</td>
                                    <td>{order.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for Selected Order Details */}
            {isModalOpen && selectedOrder && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h4>Selected Order Details</h4>
                        <p><strong>Order ID:</strong> {selectedOrder.order_id}</p>
                        <p><strong>Customer ID:</strong> {selectedOrder.customer_id}</p>
                        <p><strong>Product Name:</strong> {selectedOrder.product_name}</p>
                        <p><strong>Username:</strong> {selectedOrder.username}</p>
                        <p><strong>Total Amount:</strong>{selectedOrder.total_amount}</p>
                        <p><strong>Total Quantity:</strong>{selectedOrder.total_quantity}</p>
                        <p><strong>Email:</strong> {selectedOrder.email}</p>
                        <p><strong>Phone No: </strong>{selectedOrder.phoneno}</p>
                        <p><strong>Address:</strong> {selectedOrder.address}</p>
                        <p><strong>City:</strong> {selectedOrder.city}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderDetails;
