import React from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
import ChartComponent from './Venndiagram';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const Charts = ({ productData, orderData }) => {
  const productLabels = (productData || []).map((product) => product.productName || 'Unknown');
  const orderAmounts = (orderData || []).map((order) => order.totalAmount || 0);

  // Venn Diagram Data
  const vennData = {
    labels: ['Set A', 'Set B', 'Intersection'],
    datasets: [{
      data: [30, 50, 20],  // Adjust data according to your needs
      backgroundColor: ['red', 'blue', 'green'],
    }]
  };
  return (
    <div>
      <h2>Charts</h2>

      {/* Line Chart */}
      <div>
        <h3>Order Chart (Line)</h3>
        <Line data={{
          labels: productLabels,
          datasets: [
            {
              label: 'Order Total Amount',
              data: orderAmounts,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false,
              tension: 0.1,
            },
          ],
        }} />
      </div>

      {/* Pie Chart */}
      <div>
        <h3>Product Sales Distribution (Pie)</h3>
        <Pie data={{
          labels: productLabels,
          datasets: [
            {
              label: 'Product Sales Distribution',
              data: orderAmounts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }} />
      </div>

      {/* Bar Chart */}
      <div>
        <h3>Product Stock Quantity (Bar)</h3>
        <Bar data={{
          labels: productLabels,
          datasets: [
            {
              label: 'Product Stock Quantity',
              data: (productData || []).map((product) => product.stock || 0),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        }} />
      </div>

      {/* Venn Diagram */}
      <div>
        <h3>Venn Diagram</h3>
        <ChartComponent vennData={vennData} />
      </div>
    </div>
  );
};

export default Charts;
