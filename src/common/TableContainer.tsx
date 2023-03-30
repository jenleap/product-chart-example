import React from 'react';
import './Table.css';
import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

/* const columns = [
  { name: 'id', title: 'ID' },
  { name: 'product', title: 'Product' },
  { name: 'owner', title: 'Owner' },
];
const rows = [
  { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
]; */

type TableContainerProps = {
  columns: any[];
  rows: any[];
};

function TableContainer(props: TableContainerProps) {
  return (
    <Paper>
    <Grid
      rows={props.rows}
      columns={props.columns}
    >
      <Table />
      <TableHeaderRow />
    </Grid>
  </Paper>
  );
}

export default TableContainer;