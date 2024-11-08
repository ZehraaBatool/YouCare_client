import React, { useState, useEffect } from 'react';
import '../components/Pages/AdminPage.css';

const RegisteredCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [searchCustomerID, setSearchCustomerID] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch all customers
    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await fetch('https://you-care-server.vercel.app/skincare/registered-customers');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCustomers(data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    // Fetch customer by customer_id
    const searchCustomer = async () => {
        try {
            const response = await fetch(`https://you-care-server.vercel.app/skincare/registered-customers/${searchCustomerID}`);
            if (response.status === 404) {
                setSelectedCustomer(null);
                setIsModalOpen(false);
                throw new Error('Customer not found');
            }
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSelectedCustomer(data);
            setIsModalOpen(true); // Open the modal when a customer is selected
        } catch (error) {
            console.error('Error fetching customer:', error);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCustomer(null);
    };

    return (
        <div className="customer-details-container">
            <h3>Registered Customers</h3>

            {/* Search Customer Form */}
            <div className="search-customer">
                <input
                    type="text"
                    placeholder="Enter user ID"
                    value={searchCustomerID}
                    onChange={(e) => setSearchCustomerID(e.target.value)}
                />
                <button onClick={searchCustomer}>Search</button>
            </div>

            {/* Customer Table */}
            <div className="customer-table">
                <table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer => (
                            <tr key={customer.user_id}>
                                <td>{customer.user_id}</td>
                                <td>{customer.username}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phoneno}</td>
                                <td>{customer.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Selected Customer Details */}
            {isModalOpen && selectedCustomer && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h4>Selected Customer Details</h4>
                        <p><strong>Customer ID:</strong> {selectedCustomer.user_id}</p>
                        <p><strong>Username:</strong> {selectedCustomer.username}</p>
                        <p><strong>Email:</strong> {selectedCustomer.email}</p>
                        <p><strong>Phone No:</strong> {selectedCustomer.phoneno}</p>
                        <p><strong>Password:</strong> {selectedCustomer.password}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegisteredCustomers;
