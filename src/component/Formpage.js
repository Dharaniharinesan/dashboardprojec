import React, { useState } from 'react';
import './FormPage.css';

const FormPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    productName: '',
    sku: '',
    price: '',
    stock: '',
    category: '',
    status: '',
    orderId: '',
    customerName: '',
    orderDate: '',
    orderStatus: '',
    paymentMethod: '',
    totalAmount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send form data to parent component
    setFormData({
      productName: '',
      sku: '',
      price: '',
      stock: '',
      category: '',
      status: '',
      orderId: '',
      customerName: '',
      orderDate: '',
      orderStatus: '',
      paymentMethod: '',
      totalAmount: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Product Fields */}
      <h2>Add Product</h2>
      <input
        type="text"
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <input
        type="text"
        name="sku"
        value={formData.sku}
        onChange={handleChange}
        placeholder="SKU"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Available Stock"
      />

      {/* Dropdown for Category */}
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home">Home</option>
        <option value="Beauty">Beauty</option>
      </select>

      {/* Dropdown for Status */}
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="">Select Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>

      <button type="submit">Add Product</button>

      {/* Order Fields */}
      <h2>Add Order</h2>
      <input
        type="text"
        name="orderId"
        value={formData.orderId}
        onChange={handleChange}
        placeholder="Order ID"
      />
      <input
        type="text"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        placeholder="Customer Name"
      />
      <input
        type="date"
        name="orderDate"
        value={formData.orderDate}
        onChange={handleChange}
        placeholder="Order Date"
      />

      {/* Dropdown for Order Status */}
      <select
        name="orderStatus"
        value={formData.orderStatus}
        onChange={handleChange}
      >
        <option value="">Select Order Status</option>
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      {/* Dropdown for Payment Method */}
      <select
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleChange}
      >
        <option value="">Select Payment Method</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="PayPal">PayPal</option>
        <option value="Net Banking">Net Banking</option>
        <option value="Cash on Delivery">Cash on Delivery</option>
      </select>

      <input
        type="number"
        name="totalAmount"
        value={formData.totalAmount}
        onChange={handleChange}
        placeholder="Total Amount"
      />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default FormPage;
