import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles
} from '@material-ui/core';

const MaterialTableWithInput = ({refRange}) => {
  const [data, setData] = useState(refRange?.map((ref)=>ref[0]));
  console.log("Patient", refRange?.map((ref)=>ref[0]))


  const tableStyles = makeStyles({
    table: {
      borderTop: '1px solid rgba(96, 96, 96, 0.3)', // Add top border to the table
    },
    tableCell: {
      height: 15, // Adjust the height value as needed
      borderRight: '1px solid rgba(96, 96, 96, 0.3)', // Add vertical lines between table cells
      padding: '8px', // Add padding to the table cells
    },
  });

  const classes = tableStyles();

  const handleCellChange = (e, id, field) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          [field]: e.target.textContent
        };
      }
      return item;
    });

    setData(updatedData);
  };

  return (
    <TableContainer component={Paper} style={{marginTop:"20px"}}>
      <Table className={classes.table}> 
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Test Parameter</TableCell>
            <TableCell className={classes.tableCell}>Result</TableCell>
            <TableCell className={classes.tableCell}>Low</TableCell>
            <TableCell className={classes.tableCell}>High</TableCell>
            <TableCell className={classes.tableCell}>Reference Range</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item?.id}>
              <TableCell className={classes.tableCell}>{item?.id}</TableCell>
              <TableCell
                className={classes.tableCell}
                contentEditable
                onInput={e => handleCellChange(e, item?.id, 'result')}
              >
                {item?.result}
              </TableCell>
              <TableCell
                className={classes.tableCell}
                contentEditable
                onInput={e => handleCellChange(e, item?.id, 'low')}
              >
                {item?.low}
              </TableCell>
              <TableCell
                className={classes.tableCell}
                contentEditable
                onInput={e => handleCellChange(e, item?.id, 'high')}
              >
                {item?.high}
              </TableCell>
              <TableCell
                className={classes.tableCell}
                contentEditable
                onInput={e => handleCellChange(e, item?.id, 'refRange')}
              >
                {item?.refRange}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialTableWithInput;
