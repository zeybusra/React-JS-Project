import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
    ['Pizza', 'Popularity'],
    ['Join', 33],
    ['Maybe', 27],
    ['Reject', 40],
];

export const options = {
    sliceVisibilityThreshold: 0.2, // 20%
    is3D: false,
    slices: [
        {
            color: '#7a8650',
        },
        {
            color: '#7781c4',
        },
        {
            color: '#2d6872',
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

function ProgressTemp() {
    return <Chart chartType="PieChart" data={data} options={options} width={'100%'} height={'400px'} />;
}

export default ProgressTemp;
