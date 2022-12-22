import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'Son', 'Messi',];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [7, 21, 10, 21, 12, 28, 12, 23],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
    },
    {
      label: 'Dataset 2',
      data: [23, 16, 25, 12, 34, 9, 17, 12],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.7)',
    },
  ],
};
function LinePie() {
  return <Line options={options} data={data} />;
}

export default LinePie;
