import React from 'react'
import "./BarChart.scss"
import {
    Chart as ChartJS,
    BarElement,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale
} from "chart.js";

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    BarElement,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale
)

const BarChart = () => {

    const data = {
        labels: ['20', '25', '30', '35', '40', '60', '65'],
        datasets: [
            {
                label:'employee k7350',
                data: [50, 80, 130, 150, 180, 220, 250],
                backgroundColor: '#3e2edf',

            }
        ]
    }

    const options = {

    }


    return (
        <div className='chart-container'>
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarChart
