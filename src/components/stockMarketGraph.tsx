



const StockMarketGraph = () => {
  return (
    <div>
      
    </div>
  )
}

export default StockMarketGraph









// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';

// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     fill: boolean;
//     borderColor: string;
//     tension: number;
//   }[];
// }

// function Home() {
//   const [chartData, setChartData] = useState<ChartData | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=demo");
//         const weeklyData = response.data["Weekly Adjusted Time Series"];
//         const labels = Object.keys(weeklyData).reverse();
//         const datasets = [
//           {
//             label: "Open Price",
//             data: labels.map((date) => parseFloat(weeklyData[date]["1. open"])),
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1,
//           }
//         ];
//         setChartData({ labels, datasets });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       {chartData ? (
//         <Line data={chartData} />
//       ) : (
//         <p>Loading chart data...</p>
//       )}
//     </div>
//   );
// }

// export default Home;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Chart } from 'react-google-charts';

// interface IData {
//   "1. open": string;
// }

// function Home() {
// //   const [chartData, setChartData] = useState<Array<[string, number] | string>>([]);
//   const [chartData, setChartData] = useState<[string, number][]>([]);
//   const openPrice = parseFloat(OpenPrice);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=demo");
//         const weeklyData = response.data["Weekly Adjusted Time Series"];
//         const chartData = Object.entries(weeklyData).reverse().map(([date, data]) => {
//           const openPrice = parseFloat((data as IData)["1. open"]);
//           return [new Date(date).toDateString(), openPrice] as [string, number];
//         });
//         setChartData([
//           ["Date", "Open Price"],
//           ...chartData,
//         ]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Set an error message in chart data
//         setChartData([["Error fetching data"]]);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <Chart
//         width={'100%'}
//         height={'400px'}
//         chartType="LineChart"
//         loader={<div>Loading Chart</div>}
//         data={chartData}
//         options={{
//           title: 'IBM Open Price',
//           hAxis: {
//             title: 'Date',
//           },
//           vAxis: {
//             title: 'Open Price',
//           },
//         }}
//         rootProps={{ 'data-testid': '1' }}
//       />
//     </div>
//   );
// }

// export default Home;
