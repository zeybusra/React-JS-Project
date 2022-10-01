import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7], // CSS-style declaration
];

export const options = {
    title: 'My Events',
    pieHole: 0.4,
    is3D: false,
    slices: [
        {
            color: '#595086',
        },
        {
            color: '#a28cc9',
        },
        {
            color: '#85937c',
        },
        {
            color: '#2d6872',
        },
        {
            color: 'rgb(119,129,196)',
        },
    ],
    legend: {
        position: 'right',
        alignment: 'center',
        textStyle: {
            color: '233238',
            fontSize: 16,
        },
    },
    fontName: 'Roboto',
    fontSize: 16,
};

function DoughnutChart() {
    return <Chart chartType="PieChart" width="100%" height="400px" data={data} options={options} />;
}

export default DoughnutChart;
