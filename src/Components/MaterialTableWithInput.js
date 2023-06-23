import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { API } from "../config";
import axios from "axios";

const MaterialTableWithInput = ({ refRange }) => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState("");
  const TOKEN = localStorage.getItem("logintoken");


  const {phone} = useParams();



  const range =
    refRange?.gender === "male"
      ? refRange?.subcategories?.map((ref) => ref.rangeForMale)
      : refRange?.subcategories?.map((ref) => ref.rangeForFemale);

  console.log("MaterialTableWithInput-child", refRange);

  const tableStyles = makeStyles({
    table: {
      borderTop: "1px solid rgba(96, 96, 96, 0.3)",
    },
    tableCell: {
      height: 15,
      borderRight: "1px solid rgba(96, 96, 96, 0.3)",

      padding: "8px",
    },
    container: {
      overflow: "hidden", // Hide the scrollbar
    }
  });

  const classes = tableStyles();

  const handleCellChange = (e, id, field) => {
    const updatedData = data?.map((item) => {
      if (item._id === id) {
        const updatedItem = {
          ...item,
          [field]: e.target.value,
        };
        return updatedItem;
      }
      return item;
    });

    setData(updatedData);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  
    try {
      await axios.post(
        `${API}/update-patient-report/`,{phone,result},
        {
          headers: { authtoken: `${TOKEN}` },
        }
      );
    } catch (e) {
      console.error(e);
    }

    
    
  };

  useEffect(() => {
    console.log("Updated data:", result);
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <TableContainer component={Paper} style={{ marginTop: "20px" }} className={classes.container}>
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
            {range !== undefined &&
              range[0]?.map((item) => (
                <TableRow key={item?._id}>
                  <TableCell className={classes.tableCell}>{item?._id}</TableCell>
                  <TableCell className={classes.tableCell}>
                    <TextField
                      style={{ width: "100%", height: "100%" }}
                      contentEditable
                      value={result}
                      onChange={(e) => setResult(e.target.value)}
                      variant="outlined"
                      margin="normal"
                    />
                  </TableCell>
                  <TableCell
                    className={classes.tableCell}
                    onInput={(e) => handleCellChange(e, item?._id, "low")}
                  >
                    {item?.low}
                  </TableCell>
                  <TableCell
                    className={classes.tableCell}
                    onInput={(e) => handleCellChange(e, item?._id, "high")}
                  >
                    {item?.high}
                  </TableCell>
                  <TableCell
                    className={classes.tableCell}
                    onInput={(e) => handleCellChange(e, item?._id, "refRange")}
                  >
                    {item?.refRange}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Submit
      </Button>
    </form>
  );
};

export default MaterialTableWithInput;
