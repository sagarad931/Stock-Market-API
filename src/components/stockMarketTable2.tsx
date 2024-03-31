// import { useState, useEffect } from 'react';
// import { AgGridReact } from '@ag-grid-community/react';

// import "ag-grid-community/styles/ag-grid.css"; 
// import "ag-grid-community/styles/ag-theme-quartz.css"; 
// import { ModuleRegistry } from '@ag-grid-community/core';
// import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import axios from 'axios';

// ModuleRegistry.registerModules([ClientSideRowModelModule]);

// interface IRow {
//   current_status: string;
//   local_close: string;
//   local_open: string;
//   market_type: string;
//   notes: string;
//   primary_exchanges: string;
//   region: string;
// }

// const GridExample = () => {
//   const [rowData, setRowData] = useState<IRow[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo");
//         const marketData = response.data.markets.map((market: IRow) => ({
//           current_status: market.current_status,
//           local_close: market.local_close,
//           local_open: market.local_open,
//           market_type: market.market_type,
//           notes: market.notes,
//           primary_exchanges: market.primary_exchanges,
//           region: market.region
//         }));
//         setRowData(marketData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className={"ag-theme-quartz-auto-dark"} style={{ width: 'auto', height: '400px', marginLeft:"20px",overflowX:'auto' }}>
//       <AgGridReact
    
//         rowData={rowData}
//         columnDefs={[
//           { headerName: "Current Status", field: "current_status", flex:1 },
//           { headerName: "Local Close", field: "local_close" , flex:1},
//           { headerName: "Local Open", field: "local_open" , flex:1},
//           { headerName: "Market Type", field: "market_type" , flex:1},
//           { headerName: "Primary Exchanges", field: "primary_exchanges", flex:1 },
//           { headerName: "Region", field: "region" , flex:1}
//         ]}

//       />
//     </div>
//   );
// }
// export default GridExample;







import { useState, useEffect } from 'react';
import { AgGridReact } from '@ag-grid-community/react';

import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import axios from 'axios';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface IRow {
  current_status: string;
  local_close: string;
  local_open: string;
  market_type: string;
  notes: string;
  primary_exchanges: string;
  region: string;
}

const GridExample = () => {
  const [rowData, setRowData] = useState<IRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo");
        const marketData = response.data.markets.map((market: IRow) => ({
          current_status: market.current_status,
          local_close: market.local_close,
          local_open: market.local_open,
          market_type: market.market_type,
          notes: market.notes,
          primary_exchanges: market.primary_exchanges,
          region: market.region
        }));
        setRowData(marketData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className={"ag-theme-quartz-auto-dark"} style={{ width: 'auto', height: '400px', maxWidth:'885px'  }}>
    
    
      <AgGridReact 
    
        rowData={rowData}
        columnDefs={[
          { headerName: "Current Status", field: "current_status", width:130, },
          { headerName: "Local Close", field: "local_close" , width:120,},
          { headerName: "Local Open", field: "local_open" ,width:130, },
          { headerName: "Market Type", field: "market_type" , width:130,},
          { headerName: "Primary Exchanges", field: "primary_exchanges", width:220},
          { headerName: "Region", field: "region" , width:130,}
        ]}

      />
    </div>
    </>
  );
}
export default GridExample;