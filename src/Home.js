import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import FormPage from './component/Formpage';
import TablePage from './component/Tablepage';
import Charts from './component/Chart';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activePage, setActivePage] = useState('dashboard');

  // Fetch data from JSON server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await fetch('http://localhost:3000/products');
        const orderResponse = await fetch('http://localhost:3000/orders');

        const productData = await productResponse.json();
        const orderData = await orderResponse.json();

        setProducts(productData);
        setOrders(orderData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle form submission
  const handleFormSubmit = async (formData) => {
    try {
      // If it's a product form submission
      if (formData.productName && !formData.orderId) {
        const productData = {
          productName: formData.productName,
          sku: formData.sku,
          price: formData.price,
          stock: formData.stock,
          category: formData.category,
          status: formData.status,
        };

        const response = await fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
        });
        const newProduct = await response.json();
        setProducts((prevProducts) => [...prevProducts, newProduct]);
      }

      // If it's an order form submission
      if (formData.orderId) {
        const orderData = {
          orderId: formData.orderId,
          customerName: formData.customerName,
          orderDate: formData.orderDate,
          orderStatus: formData.orderStatus,
          paymentMethod: formData.paymentMethod,
          totalAmount: formData.totalAmount,
        };

        const response = await fetch('http://localhost:3000/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
        });
        const newOrder = await response.json();
        setOrders((prevOrders) => [...prevOrders, newOrder]);
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div className="main-container">
      {/* Sidebar */}
      <Sidebar setActivePage={setActivePage} openSidebarToggle={true} OpenSidebar={() => {}} />

      {/* Main Content */}
      <div className="main-content">
        {activePage === 'dashboard' && (
          <>
            <div className="main-title">
              <h3>DASHBOARD</h3>
            </div>
            <div className="main-cards">
              <div className="card">
                <h3>Products</h3>
                <h1>{products.length}</h1>
              </div>
              <div className="card">
                <h3>Orders</h3>
                <h1>{orders.length}</h1>
              </div>
            </div>
            <TablePage  productData={products} orderData={orders}  />
          </>
        )}

        {/* Conditional rendering based on active page */}
        {activePage === 'form' && <FormPage onSubmit={handleFormSubmit} />}
        {activePage === 'table' && <TablePage productData={products} orderData={orders} />}
        {activePage === 'charts' && <Charts productData={products} orderData={orders} />}
      </div>
    </div>
  );
}

export default Home;
