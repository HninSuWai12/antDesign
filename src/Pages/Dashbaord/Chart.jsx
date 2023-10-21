import React, {useEffect, useState} from 'react'
import {getRevenue} from "../../API/index.js";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {Card} from "antd";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const [revenue, setRevenue] = useState({
        labels: [],
        datasets: [],
    });
    useEffect(() =>{
        getRevenue().then((res) =>{
            const labels = res.carts.map((item) => {
                return `User-${item.userId}`
            });
            const data = res.carts.map((item) => {
                return item.discountedTotal;
            });
            const dataSource = {
                labels,
                datasets: [
                    {
                        label: 'Revenue',
                        data: data,
                        backgroundColor: 'rgba(255, 0 ,0 ,1)',
                    },

                ],

            }
            setRevenue(dataSource);


        })

    } , [])


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Order Revenue',
            },
        },
    };


    return (

        <Card style={{width: 500 , height: 250}}>
            <Bar options={options} data={revenue} />;
        </Card>
    );

}
export default Chart
