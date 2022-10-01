import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
    [
        {
            type: 'date',
            id: 'Date',
        },
        {
            type: 'number',
            id: 'Won/Loss',
        },
    ],
    [new Date(), 38108],
    [new Date(), 38024],
    [new Date(), 38024],
    [new Date(), 37032],
    [new Date(), 38229],
    [new Date(), 38229],
    [new Date(), 38229],
    [new Date(), 38229],
];
export const options = {
    legend: 'center',
};

function CalendarTemp() {
    return <Chart chartType="Calendar" data={data} options={options} />;
}

export default CalendarTemp;
