import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@material-ui/core';

const MaterialTableWithInput = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Mark', age: 35 },
  ]);

  const handleChange = (e, id, field) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          [field]: e.target.value
        };
      }
      return item;
    });

    setData(updatedData);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <TextField
                  value={item.name}
                  onChange={e => handleChange(e, item.id, 'name')}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={item.age}
                  onChange={e => handleChange(e, item.id, 'age')}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialTableWithInput;
