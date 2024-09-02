import React, { useState } from 'react';
import './SalesForm.css'; // Import CSS for styling

const SalesForm = () => {
    // State for form data
    const [formData, setFormData] = useState({
        productId: '',
        productName: '',
        cost: '',
        date: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Sales form submitted:', formData);
    };

    return (
        <div className="sales-form">
            <h2>Sales Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="productId">Product ID:</label>
                        <input
                            type="text"
                            id="productId"
                            name="productId"
                            value={formData.productId}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name:</label>
                        <select
                            id="productName"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a product</option>
                            <option value="Product1">Product 1</option>
                            <option value="Product2">Product 2</option>
                            <option value="Product3">Product 3</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="cost">Cost:</label>
                        <input
                            type="number"
                            id="cost"
                            name="cost"
                            value={formData.cost}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SalesForm;
