import axios from "axios";
import { useEffect, useState } from "react";
// import {
//     Table,
//     Header,
//     HeaderRow,
//     Body,
//     Row,
//     HeaderCell,
//     Cell,
//   } from "@table-library/react-table-library/table";
  
//   import { useTheme } from "@table-library/react-table-library/theme";

  

interface MarketData {
  current_status: string;
  local_close: string;
  local_open: string;
  market_type: string;
  notes: string;
  primary_exchanges: string;
  region: string;
}

const TableApidata = () => {
  const [apiData, setApiData] = useState<MarketData[]>([]);

  const displayData = async () => {
    try {
      const response = await axios.get("https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo");
      console.log(response.data.markets);
  
      if (response.data.markets) {
        const result: MarketData[] = response.data.markets.map((data: MarketData) => ({
          current_status: data.current_status,
          local_close: data.local_close,
          local_open: data.local_open,
          market_type: data.market_type,
          notes: data.notes,
          primary_exchanges: data.primary_exchanges,
          region: data.region,
        }));
        setApiData(result);
      } else {
        console.error("No market data found");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    displayData();
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {apiData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Market Type</th>
              <th>Region</th>
              <th>Primary Exchanges</th>
              <th>Local Open</th>
              <th>Local Close</th>
              <th>Current Status</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data, index) => (
              <tr key={index}>
                <td>{data.market_type}</td>
                <td>{data.region}</td>
                <td>{data.primary_exchanges}</td>
                <td>{data.local_open}</td>
                <td>{data.local_close}</td>
                <td>{data.current_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    
  //   <Table data={apiData}>
  //     <>
  //        <Header>
  //       <HeaderRow>
  //         <HeaderCell>current_status</HeaderCell>
  //         <HeaderCell>local_close</HeaderCell>
  //         <HeaderCell>local_open</HeaderCell>
  //         <HeaderCell>market_type</HeaderCell>
  //         <HeaderCell>notes</HeaderCell>
  //         <HeaderCell>primary_exchanges</HeaderCell>
  //         <HeaderCell>region</HeaderCell>
  //       </HeaderRow>
  //     </Header>
  //       <Body>
  //         {apiData.map((data, index) => (
  //           <Row item={data} key={index}>
  //          {/* <Row item={{ ...data, id: index.toString() }} key={index}> */}
  //             <Cell>{data.current_status}</Cell>
  //             <Cell>{data.local_close}</Cell>
  //             <Cell>{data.local_open}</Cell>
  //             <Cell>{data.market_type}</Cell>
  //             <Cell>{data.primary_exchanges}</Cell>
  //             <Cell>{data.region}</Cell>
  //           </Row>
  //         ))}
  //       </Body>
  //     </>

  // </Table>
  );
};

export default TableApidata;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Table,
//   Header,
//   HeaderRow,
//   Body,
// //   Row,
//   HeaderCell,
//   Cell,
// } from "@table-library/react-table-library/table";
// // import { useTheme } from "@table-library/react-table-library/theme";

// interface MarketData {
// //   id: string;
//   current_status: string;
//   local_close: string;
//   local_open: string;
//   market_type: string;
//   notes: string;
//   primary_exchanges: string;
//   region: string;
// }

// const StockMarketData: React.FC = () => {
//   //   const theme = useTheme();
//   const [data, setData] = useState<MarketData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=EGE9ODG4XG0ATFV8"
//         );
//         const markets = response.data.markets;
//         console.log(markets);
//         if (markets) {
//           setData(markets);
//         } else {
//           console.error("No market data found");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <Table data={data}>
    //   <Header>
    //     <HeaderRow>
    //       <HeaderCell>current_status</HeaderCell>
    //       <HeaderCell>local_close</HeaderCell>
    //       <HeaderCell>local_open</HeaderCell>
    //       <HeaderCell>market_type</HeaderCell>
    //       <HeaderCell>notes</HeaderCell>
    //       <HeaderCell>primary_exchanges</HeaderCell>
    //       <HeaderCell>region</HeaderCell>
    //     </HeaderRow>
    //   </Header>
//       <Body>
//         {data.map((item, index) => (
//           <Cell key={index}>
//             <Cell>{item.current_status}</Cell>
//             <Cell>{item.local_close}</Cell>
//             <Cell>{item.local_open}</Cell>
//             <Cell>{item.market_type}</Cell>
//             <Cell>{item.notes}</Cell>
//             <Cell>{item.primary_exchanges}</Cell>
//             <Cell>{item.region}</Cell>
//           </Cell>
//         ))}
//       </Body>
//     </Table>
//   );
// };

// export default StockMarketData;
