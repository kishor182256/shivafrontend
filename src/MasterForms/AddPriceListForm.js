import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { Box } from "@material-ui/core";
import { formStyles } from "../Styles/Formstyle";
import Buttons from "../Components/Shared/Buttons";
import Input from "../Components/Shared/Input";
import axios from "axios";
import { API } from "../config";

const AddPriceListForm = () => {
  const classes = formStyles();
  const [rows, setRows] = useState();
  const [sub, setSub] = useState();
  const [status, setStatus] = useState("");
  const [subid, setSubId] = useState("");
  const [rate, setPrice] = useState(0);



  console.log("status", status);
  console.log("subid", subid);


  const TOKEN = localStorage.getItem("logintoken");

  const fetchTest = async (e) => {
    try {
      const data = await axios.get(`${API}/gettestcategory`, {
        headers: { authtoken: `${TOKEN}` },
      });
      setRows(data.data.testCategory);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchSubTest = async (e) => {
    try {
      const data = await axios.get(`${API}/gettestsubcategory`, {
        headers: { authtoken: `${TOKEN}` },
      });
      setSub(data.data.subTestCategory);
      console.log("----->testdata", data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTest();
    fetchSubTest();
  }, []);


  const handleSubmit = async() => {
    console.log('Submit',status,subid,rate);

      try {
        const data = await axios.put(`${API}/addtestcategoryprice`,{status,subid,rate}, {
          headers: { authtoken: `${TOKEN}` },
        });
        console.log("----->testdata", data);
      } catch (e) {
        console.log(e);
      }
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.collectorForm}>
          <div className={classes.formheader}>
            <div className={classes.formname}>
              <div className={classes.formh2}>Add New Price list </div>
              <div className={classes.formspecification}>
                {rows?.length} You can create new report group here
              </div>
            </div>
            <div>
              <Buttons className={classes.formButton}>
                &nbsp; Back to test table
              </Buttons>
            </div>
          </div>

          <div>
            <div className={classes.formMain}>
              <FormControl>
                <div className={classes.formDiv1}>
                  <div className={classes.formDiv2}>
                    <div className={classes.formHeading}> New price list </div>
                    <div className={classes.formLable}>Select Category</div>
                    <Select
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
                      className={classes.selectInput}
                    >
                      {rows?.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <br />
                    <div className={classes.formLable}>Rate</div>
                    <Input
                      type="number"
                      placeholder="Enter Rate"
                      className={classes.formInput}
                      value={rate}
                      onChange={(e)=>setPrice(e.target.value)}
                    />{" "}
                    <br />
                  </div>
                  <div className={classes.formDiv3}>
                    <div className={classes.formLable}>Select Group Format</div>
                    <Select
                      value={subid}
                      onChange={(event) => setSubId(event.target.value)}
                      className={classes.selectInput}
                    >
                      {sub?.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <br />
                  </div>
                </div>
                <div className={classes.formDiv4}>
                  <Buttons className={classes.cancelButton}>Cancel</Buttons>
                  <Buttons className={classes.submitButton} onClick={handleSubmit}>Submit</Buttons>
                </div>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPriceListForm;
