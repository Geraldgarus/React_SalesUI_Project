import React, { useState } from 'react';
import './Addproducts.css'; // Import the CSS file for styling

const Addproducts = () => {
  // Local state to manage form inputs
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, e.g., send data to server
    console.log({ productId, productName, quantity, cost, date });
  };

  return (
    <div className="add-products">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="productId">Product ID:</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <label htmlFor="cost">Cost:</label>
          <input
            type="number"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Addproducts;
