import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface StockDataItem {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
}

const LiveChart = () => {
    const [stockData, setStockData] = useState({});

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=demo`);
                setStockData(response.data['Weekly Adjusted Time Series']);
            } catch (error) {
                console.error("Error fetching stock data:", error);
            }
        };

        fetchStockData();
    }, []);

    const formatStockData = () => {
      const formattedData: { x: string; y: number[] }[] = [];
    
      Object.entries(stockData).forEach(([key, value]) => {
        const stockDataItem = value as StockDataItem;
        formattedData.push({
          x: key,
          y: [
            parseFloat(stockDataItem['1. open']),
            parseFloat(stockDataItem['2. high']),
            parseFloat(stockDataItem['3. low']),
            parseFloat(stockDataItem['4. close']),
          ],
        });
      });
    
      return formattedData;
    };

    const candleStickOptions: ApexOptions = {
        chart: {
            type: "candlestick",
            height: 350,
        },
        title: {
            text: "CandleStick Chart ",
            align: "left",
        },
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            tooltip: {
                enabled: false,
            },
        },
        plotOptions: {
          candlestick: {
            wick: {
              useFillColor: true,
            }
          }
        }
    };

    return (
        <ReactApexChart
            height={500}
            series={[
                {
                    data: formatStockData()
                }
            ]}
            options={candleStickOptions}
            type="candlestick"
        />
    );
}

export default LiveChart;
