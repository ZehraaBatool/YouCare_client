import React, { useState, useEffect } from 'react';
import '../components/Pages/AdminPage.css';

const ShipmentDetails = () => {
    const [shipments, setShipments] = useState([]);
    const [searchShippingID, setSearchShippingID] = useState('');
    const [selectedShipment, setSelectedShipment] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    // Fetch all shipments
    useEffect(() => {
        fetchShipments();
    }, []);

    const fetchShipments = async () => {
        try {
            const response = await fetch('http://localhost:5000/skincare/shipment');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setShipments(data);
        } catch (error) {
            console.error('Error fetching shipments:', error);
        }
    };

    // Fetch shipment by shipping_id
    const searchShipment = async () => {
        try {
            const response = await fetch(`http://localhost:5000/skincare/shipment/${searchShippingID}`);
            if (response.status === 404) {
                setSelectedShipment(null);
                throw new Error('Shipment not found');
            }
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSelectedShipment(data);
            setIsModalOpen(true); // Open the modal on shipment selection
        } catch (error) {
            console.error('Error fetching shipment:', error);
        }
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedShipment(null);
    };

    return (
        <div className="shipment-details-container">
            <h3>Shipment Details</h3>

            {/* Search Shipment Form */}
            <div className="search-shipment">
                <input
                    type="text"
                    placeholder="Enter Shipping ID"
                    value={searchShippingID}
                    onChange={(e) => setSearchShippingID(e.target.value)}
                />
                <button onClick={searchShipment}>Search</button>
            </div>

            {/* Shipment Table */}
            <div className="shipment-table">
                <table>
                    <thead>
                        <tr>
                            <th>Shipping ID</th>
                            <th>Order ID</th>
                            <th>Shipping Address</th>
                            <th>Shipment Date</th>
                            <th>Delivery Date</th>
                            <th>Tracking Number</th>
                            {/* Add more columns as per your shipment schema */}
                        </tr>
                    </thead>
                    <tbody>
                        {shipments.map(shipment => (
                            <tr key={shipment.shipping_id}>
                                <td>{shipment.shipping_id}</td>
                                <td>{shipment.order_id}</td>
                                <td>{shipment.shipping_address}</td>
                                <td>{shipment.shipment_date}</td>
                                <td>{shipment.delivery_date}</td>
                                <td>{shipment.tracking_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Selected Shipment Details */}
            {isModalOpen && selectedShipment && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h4>Selected Shipment Details</h4>
                        <p><strong>Shipping ID:</strong> {selectedShipment.shipping_id}</p>
                        <p><strong>Order ID:</strong> {selectedShipment.order_id}</p>
                        <p><strong>Shipping Address:</strong> {selectedShipment.shipping_address}</p>
                        <p><strong>Shipment Date:</strong> {selectedShipment.shipment_date}</p>
                        <p><strong>Delivery Date:</strong> {selectedShipment.delivery_date}</p>
                        <p><strong>Tracking Number:</strong> {selectedShipment.tracking_number}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShipmentDetails;
