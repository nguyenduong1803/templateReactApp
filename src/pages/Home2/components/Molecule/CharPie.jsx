import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function CharPie() {
  const data2 = {
    labels: ['John', 'Messi', 'Tailor Switch', 'Ronaldo'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 7, 13],
        backgroundColor: [
          'rgba(16, 57, 150, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)'
        ],
        borderColor: [
          'rgba(16, 57, 150, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
  return <Pie data={data2} />;
}

export default CharPie;
