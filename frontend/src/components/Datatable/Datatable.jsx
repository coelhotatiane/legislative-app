import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ReactComponent as BillIcon } from "../../assets/law-book-law-svgrepo-com.svg";
import { ReactComponent as PersonIcon } from "../../assets/woman-with-hand-on-chin-svgrepo-com.svg";

const columnsLegislator = [
  {
    field: 'icon',
    headerName: '',
    renderCell: () => (
      <PersonIcon style={{ width: "50%" }} />
    ),
  },
  { field: 'name', headerName: 'Name', minWidth: 200 },
  { field: 'supportedBill', headerName: 'Supported Bills', type: 'number', minWidth: 200 },
  { field: 'opposedBills', headerName: 'Opposed Bills', type: 'number', minWidth: 200 },
];

const columnsBill = [
  {
    field: 'icon',
    headerName: '',
    renderCell: () => (
      <BillIcon style={{ width: "50%" }} />
    ),
  },
  { field: 'title', headerName: 'Title', minWidth: 200 },
  { field: 'supporters', headerName: 'Supporters', type: 'number', minWidth: 200 },
  { field: 'opposers', headerName: 'Opposers', type: 'number', minWidth: 200 },
  { field: 'primarySponsor', headerName: 'Primary Sponsor', minWidth: 200 },
];

function SimpleTable({ columns, rows }) {
  return (
    <DataGrid style={{ border: 'none', maxHeight: "300px" }}
      rows={rows}
      columns={columns}
      disableColumnMenu
      disableRowSelectionOnClick
      />
  );
}

export default function DataTable({ type, data }) {
 if(type === "legislator") {
  return (
    <SimpleTable columns={columnsLegislator} rows={data} />
  );
 }
 if(type === "bill") {
  return (
    <SimpleTable columns={columnsBill} rows={data} />
  );
 }
}
