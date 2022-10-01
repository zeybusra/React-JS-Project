import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
    ['Element', '#e7740a', { role: 'style' }],
    ['Copper', 8.94, '#e7740a'],
    ['Silver', 10.49, '#e7740a'],
    ['Gold', 19.3, '#e7740a'],
    ['Platinum', 21.45, 'color: #e7740a'],
];

function ColumnChart2() {
    return <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />;
}

export default ColumnChart2;
