import React, { useEffect, useState } from "react";
// import Buttons from '../../Components/Shared/Buttons';
// import Input from '../../Components/Shared/Input'
import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import MenuItem from "@material-ui/core/MenuItem";
import { Checkbox, Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { formStyles } from "../Styles/Formstyle";
import Buttons from "../Components/Shared/Buttons";
import Input from "../Components/Shared/Input";
import axios from "axios";
import { API } from "../config";

const AddNewTestForm = () => {
  const classes = formStyles();
  const [value, setValue] = useState("1");
  const [rows, setRows] = useState();
  const [status, setStatus] = useState('');
  const [category,setCategory] = useState();

  const [low, setLow] = useState();
  const [high, setHigh] = useState();
  const [age, setAge] = useState();
  const [refvalue, setRefvalue] = useState();

  const [lowf, setfLow] = useState();
  const [highf, setfHigh] = useState();
  const [agef, setfAge] = useState();
  const [reffvalue, setfRefvalue] = useState();


  const [testname, setTestname] = useState();
  const [testid, setTestid] = useState();
  const [unit, setUnit] = useState();
  const [deltalimit, setDeltaLimit] = useState();
  const [tat, setTat] = useState();
  const [normal, setNormal] = useState();
  const [deltime, setDeltime] = useState();


  const testdata = {
    low,
    high,
    age,
    refvalue,
    deltime,
    lowf,
    highf,
    agef,
    reffvalue,
    status,
    category,
    testname,
    testid,
    unit,
    deltalimit,
    tat,
    normal,
  };

  console.log('testdata',category,status);






  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleChange = (event) => {
    setStatus(event.target.value);
  };



  const [inputFields, setInputFields] = useState([
    { ageUpto: "", low: "", high: "", refRange: "" },
  ]);

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

  useEffect(() => {
    fetchTest();
  }, []);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ ageUpto: "", low: "", high: "", refRange: "" });
    setInputFields(values);
  };

  const handleSubmit = async() => {
    try{
    
          try {
            const data = await axios.post(`${API}/addtestsubcategory`,{testdata}, {
              headers: { authtoken: `${TOKEN}` },
            });
            console.log("----->testdata", data.data);
          } catch (e) {
            console.log(e);
          }
      
    }catch(e){
      console.error(e)
    }
  };

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <div className={classes.collectorForm}>
        <div className={classes.formheader}>
          <div className={classes.formname}>
            <div className={classes.formh2}>Add New Doctor</div>
            <div className={classes.formspecification}>
              {rows?.length} You can add new doctor into list
            </div>
          </div>
          <div>
            <Buttons className={classes.formButton}>
              &nbsp; Back to test table
            </Buttons>
          </div>
        </div>

        <div>
          <Box sx={{ padding: "0 12%", borderColor: "blue" }}>
            <TabContext value={value} className={classes.tabs}>
              <Box sx={{ padding: "0 30%", marginBottom: "40px" }}>
                <TabList
                  onChange={handleChange1}
                  aria-label="lab API tabs example"
                  sx={{ "& .MuiTabs-indicator": { backgroundColor: "black" } }}
                >
                  <Tab
                    label="Test Information"
                    className={classes.tablist}
                    value="1"
                  />
                  <Tab
                    label="Reference Range"
                    className={classes.tablist}
                    value="tab2"
                  />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{}}>
                <div>
                  <div className={classes.formMain}>
                    <FormControl>
                      <div className={classes.formDiv1}>
                        <div className={classes.formDiv2}>
                          <div className={classes.formHeading}>
                            New Test Information
                          </div>
                          <div className={classes.formLable}>Category</div>
                          <FormControl>
                            <Select
                              value={category}
                              onChange={(event) =>
                                setCategory(event.target.value)
                              }
                              className={classes.selectInput}
                            >
                              {rows?.map((option) => (
                                <MenuItem key={option._id} value={option._id}>
                                  {option.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>{" "}
                          <br />
                          <div className={classes.formLable}>Test Name</div>
                          <Input
                            type="number"
                            placeholder="Enter Test Name"
                            className={classes.formInput}
                            value={testname}
                            onChange={(e)=>setTestname(e.target.value)}
                          />{" "}
                          <br />
                          <div className={classes.formLable}>Normals</div>
                          <Input
                            type="text"
                            placeholder="Enter Normals"
                            className={classes.formInput}
                            value={normal}
                            onChange={(e)=>setNormal(e.target.value)}
                          />{" "}
                          <br />
                          <div className={classes.formLable}>
                            Time arount test(TAT) in minutes
                          </div>
                          <Input
                            type="text"
                            placeholder="Enter TAT"
                            className={classes.formInput}
                            value={tat}
                            onChange={(e)=>setTat(e.target.value)}
                          />{" "}
                          <br />
                          <div className={classes.formLable}>
                            Result visble to all:
                            <Checkbox {...label} color="default" />
                          </div>
                          <div className={classes.formLable}>
                            Print in card:
                            <Checkbox {...label} color="default" />
                          </div>{" "}
                          <br />
                        </div>
                        <div className={classes.formDiv3}>
                          <div className={classes.formLable}>Test ID</div>
                          <Input
                            type="text"
                            placeholder="Enter Test ID"
                            className={classes.formInput}
                            value={testid}
                            onChange={(e)=>setTestid(e.target.value)}
                          />{" "}
                          <br />
                          <div className={classes.formLable}>Unit</div>
                          <Input
                            type="email"
                            placeholder="Enter Unit"
                            className={classes.formInput}
                            value={unit}
                            onChange={(e)=>setUnit(e.target.value)}
                          />{" "}
                          <br />
                          <div className={classes.formLable}>Default value</div>
                          <br />
                          <div className={classes.formLable}>
                            Delta check limit
                          </div>
                          <Input
                            type="text"
                            placeholder="Enter Delta limit"
                            className={classes.formInput}
                            value={deltalimit}
                            onChange={(e)=>setDeltaLimit(e.target.value)}
                          />
                          <div>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                            >
                              <FormControlLabel
                                style={{
                                  fontSize: "6px",
                                  margin: "0 30px 0 0 ",
                                }}
                                value="% value"
                                control={
                                  <Radio
                                    color="default"
                                    style={{ width: "8px", height: "8px" }}
                                  />
                                }
                                label="% value"
                              />
                              <FormControlLabel
                                style={{ fontSize: "6px" }}
                                value="male"
                                control={
                                  <Radio
                                    color="Absolute value"
                                    style={{ width: "8px", height: "8px" }}
                                  />
                                }
                                label="Absolute value"
                              />
                            </RadioGroup>
                            <br />
                          </div>
                          <div className={classes.formLable}>
                            Delta check time duration
                          </div>
                          <Input
                            type="text"
                            placeholder="Enter Delta duration"
                            className={classes.formInput}
                            value={deltime}
                            onChange={(e)=>setDeltime(e.target.value)}
                          />{" "}
                          <br />
                        </div>
                      </div>
                      <div className={classes.formDiv4}>
                        <Buttons className={classes.cancelButton}>
                          Cancel
                        </Buttons>
                        <Buttons
                          className={classes.submitButton}
                          onClick={() => setValue("tab2")}
                        >
                          Add Ref Data
                        </Buttons>
                      </div>
                    </FormControl>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="tab2" sx={{}}>
                <div>
                  <div className={classes.formHeading}>
                    New Report Group Format
                  </div>
                  <div className={classes.formLable}>Gender</div>
                  <div>
                    <Select
                      className={classes.selectInput}
                      placeholder="Select"
                      label="Select"
                      value={status}
                      onChange={handleChange}
                    >
                      <MenuItem
                        value="male"
                        style={{ backgroundColor: "transparent" }}
                      >
                        Male
                      </MenuItem>
                      <MenuItem value="female" className={classes.menuInput}>
                        Female
                      </MenuItem>
                    </Select>{" "}
                    <Buttons className={classes.addButton}>Add</Buttons>
                    <br />
                  </div>

                  <div className={classes.genderDiv}>
                    <div className={classes.genderDiv1}>
                      <div>
                        <div className={classes.genderHeading}>For Male</div>
                        <div
                          className={classes.genderDiv2}
                          style={{ display: "flex" }}
                        >
                          <div>
                            <div className={classes.formLable}>Age upto</div>
                            <Input
                              type="number"
                              placeholder="Enter Age Range"
                              className={classes.genformInput}
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                            />{" "}
                            <br />
                          </div>

                          <div>
                            <div className={classes.formLable}>High value</div>
                            <Input
                              type="number"
                              placeholder="Enter high value"
                              className={classes.genformInput}
                              value={high}
                              onChange={(e) => setHigh(e.target.value)}
                            />{" "}
                            <br />
                          </div>
                          <div>
                            <div className={classes.formLable}>Low value</div>
                            <Input
                              type="number"
                              placeholder="Enter low value"
                              className={classes.genformInput}
                              value={low}
                              onChange={(e) => setLow(e.target.value)}
                            />{" "}
                            <br />
                          </div>
                          <div>
                            <div className={classes.formLable}>
                              Refrange value
                            </div>
                            <Input
                              type="text"
                              placeholder="Enter Refrange value"
                              className={classes.genformInput}
                              value={refvalue}
                              onChange={(e) => setRefvalue(e.target.value)}
                            />{" "}
                            <br />
                          </div>
                          <div style={{ marginTop: "28px" }}>
                            <svg
                              width="36"
                              height="36"
                              viewBox="0 0 36 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={handleAddFields}
                            >
                              <rect
                                x="0.469727"
                                y="0.24408"
                                width="35"
                                height="35"
                                rx="17.5"
                                fill="#273142"
                              />
                              <path
                                d="M12.0297 18.8481V16.5341H16.9437V11.9321H19.3357V16.5341H24.2497V18.8481H19.3357V23.4761H16.9437V18.8481H12.0297Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={classes.genderDiv}>
                    <div className={classes.genderDiv1}>
                      <div>
                        <div className={classes.genderHeading}>For FeMale</div>
                        <div
                          className={classes.genderDiv2}
                          style={{ display: "flex" }}
                        >
                          <div>
                            <div className={classes.formLable}>Age upto</div>
                            <Input
                              type="number"
                              placeholder="Enter Age Range"
                              className={classes.genformInput}
                              value={agef}
                              onChange={(e) => setfAge(e.target.value)}
                            />{" "}
                            <br />
                          </div>

                          <div>
                            <div className={classes.formLable}>High value</div>
                            <Input
                              type="number"
                              placeholder="Enter high value"
                              className={classes.genformInput}
                              value={highf}
                              onChange={(e) => setfHigh(e.target.value)}
                            />{" "}
                            <br />
                          </div>
                          <div>
                            <div className={classes.formLable}>Low value</div>
                            <Input
                              type="number"
                              placeholder="Enter low value"
                              className={classes.genformInput}
                              value={lowf}
                              onChange={(e) => setfLow(e.target.value)}
                            />{" "}
                            <br />
                          </div>
                          <div>
                            <div className={classes.formLable}>
                              Refrange value
                            </div>
                            <Input
                              type="text"
                              placeholder="Enter Refrange value"
                              className={classes.genformInput}
                              value={reffvalue}
                              onChange={(e) => setfRefvalue(e.target.value)}
                            />{" "}
                            <br />
                          </div>
                          <div style={{ marginTop: "28px" }}>
                            <svg
                              width="36"
                              height="36"
                              viewBox="0 0 36 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={handleAddFields}
                            >
                              <rect
                                x="0.469727"
                                y="0.24408"
                                width="35"
                                height="35"
                                rx="17.5"
                                fill="#273142"
                              />
                              <path
                                d="M12.0297 18.8481V16.5341H16.9437V11.9321H19.3357V16.5341H24.2497V18.8481H19.3357V23.4761H16.9437V18.8481H12.0297Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={classes.formDiv4}>
                    <Buttons className={classes.cancelButton}>Cancel</Buttons>
                    <Buttons
                      className={classes.submitButton}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Buttons>
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AddNewTestForm;
