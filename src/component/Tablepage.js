import React from 'react';
import './TablePage.css';

const TablePage = ({ productData, orderData }) => {
  return (
    <div>
      {/* Product Table */}
      <h2>Product Table</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {productData && productData.length > 0 ? (
            productData.map((product) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.sku}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                <td>{product.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No products available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Order Table */}
      <h2>Order Table</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Order Status</th>
            <th>Payment Method</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {orderData && orderData.length > 0 ? (
            orderData.map((order) => (
              <tr key={order.id}>
                <td>{order.orderId}</td>
                <td>{order.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.orderStatus}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.totalAmount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No orders available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
