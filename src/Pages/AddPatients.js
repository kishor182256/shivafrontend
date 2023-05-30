import React, { useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  List,
  ListItemText,
  Tab,
} from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import MenuItem from "@material-ui/core/MenuItem";
import { Checkbox, Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Buttons from "../Components/Shared/Buttons";
import Input from "../Components/Shared/Input";
import { formStyles } from "../Styles/Formstyle";
import axios from "axios";
import { API } from "../config";
import { CrossIcon } from "../Components/Shared/UserSvg";

const PatientInformationForm = () => {
  const classes = formStyles();
  const [value, setValue] = useState("1");
  const [rows, setRows] = useState();
  const [status, setStatus] = useState("");
  const [status1, setStatus1] = useState("");
  const [personName, setPersonName] = React.useState([]);

  const [labnumber, setLabnumber] = useState();
  const [totalamount, settotalamount] = useState();
  const [discount, setDiscount] = useState();
  const [city, setCity] = useState();
  const [lastname, setLastname] = useState();
  const [firstname, setfirstname] = useState();
  const [gender, setgender] = useState();
  const [notes, setNotes] = useState();
  const [samplestatus, setsamplestatus] = useState();
  const [netamount, setnetamount] = useState();
  const [sample, setsample] = useState();
  const [referedby, setreferedby] = useState();
  const [age, setAge] = useState();
  const [address, setaddress] = useState();
  const [refID, setrefID] = useState();
  const [paidamount, setpaidamount] = useState();
  const [dueamount, setdueamount] = useState();
  const [discountreason, setdiscountreason] = useState();
  const [email, setemail] = useState();
  const [reportcategory, setreportcategory] = useState();
  const [subcategories, setsubcategories] = useState();
  const [isChecked, setIsChecked] = useState(false);


  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  
  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };

  const TOKEN = localStorage.getItem("logintoken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post(
        `${API}/register-user`,
        {},
        {
          headers: { authtoken: `${TOKEN}` },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const registerPatience = async () => {

    try {
      const data = await axios.post(
        `${API}/register-patience`,
        {
          // labprescition,
          labnumber,
          totalamount,
          discount,
          city,
          lastname,
          firstname,
          gender,
          samplestatus,
          netamount,
          sample,
          referedby,
          age,
          address,
          refID,
          paidamount,
          dueamount,
          discountreason,
          // phone,
          reportcategory,
          subcategories,
          email,
        },
        {
          headers: { authtoken: `${TOKEN}` },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: "50%",
      },
    },
  };

  const names = [
    "Blood Group",
    "Blood Group",
    "Blood Group",
    "Blood Group",
    "Blood Group",
    "Blood Group",
    "Blood Group",
    "Blood Group",
  ];

  return (
    <div className={classes.root}>
      <div className={classes.collectorForm}>
        <div className={classes.formheader}>
          <div className={classes.formname}>
            <div className={classes.formh2}>Add new patient registration</div>
            <div className={classes.formspecification}>
              {rows?.length} Complete all 3 steps
            </div>
          </div>
          <div>
            <Buttons className={classes.formButton}>
              &nbsp; Back to test table
            </Buttons>
          </div>
        </div>

        <div>
          <Box sx={{ padding: "0 6%", borderColor: "blue" }}>
            <TabContext value={value} className={classes.tabs}>
              <Box sx={{ padding: "0 26%", marginBottom: "40px" }}>
                <TabList
                  onChange={handleChange1}
                  aria-label="lab API tabs example"
                  sx={{
                    padding: "0 10%",
                    "& .MuiTabs-indicator": { backgroundColor: "black" },
                  }}
                >
                  <Tab
                    label="Patient Information"
                    className={classes.tablist}
                    value="1"
                  />
                  <Tab
                    label="Investigations"
                    className={classes.tablist}
                    value="2"
                  />
                  <Tab label="Payments" className={classes.tablist} value="3" />
                </TabList>
              </Box>
              <Box sx={{ marginBottom: "40px" }}>
                <TabPanel value="1">
                  <div>
                    <div className={classes.formMain}>
                      <FormControl style={{ width: "100%" }}>
                        <div className={classes.formDiv1}>
                          <div
                            style={{ width: "30%", marginLeft: "2%" }}
                            className={classes.formDiv2}
                          >
                            <div className={classes.formHeading}>
                              Basic information
                            </div>
                            <div className={classes.formLable}>Lab Pre*</div>
                            <FormControl>
                              <Select
                                className={classes.selectInput2}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Category1"}>
                                  Category1
                                </MenuItem>
                                <MenuItem value={"Category2"}>
                                  Category2
                                </MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                            <div className={classes.formLable}>
                              Patient First Name*
                            </div>
                            <Input
                              type="number"
                              placeholder="Enter First Name  here"
                              className={classes.formInput2}
                              value={firstname}
                              onChange={(e) => setfirstname(e.target.value)}
                            />{" "}
                            <br />
                            <div className={classes.formLable}>Gender*</div>
                            <FormControl>
                              <Select
                                className={classes.selectInput2}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="">
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                            <div className={classes.formLable}>Sample from</div>
                            <FormControl>
                              <Select
                                className={classes.selectInput2}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Category1"}>
                                  Category1
                                </MenuItem>
                                <MenuItem value={"Category2"}>
                                  Category2
                                </MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                            <div className={classes.formLable}>
                              Reference ID
                            </div>
                            <Input
                              type="text"
                              placeholder="Enter here"
                              className={classes.formInput2}
                            />{" "}
                            <br />
                            <div className={classes.formLable}>Address</div>
                            <Input
                              type="text"
                              placeholder="Enter here"
                              className={classes.formInput2}
                              value={address}
                              onChange={(e) => setaddress(e.target.value)}
                            />{" "}
                            <br />
                          </div>
                          <div
                            style={{ width: "30%", marginLeft: "2%" }}
                            className={classes.formDiv3}
                          >
                            <div className={classes.formLable}>Lab no*</div>
                            <Input
                              type="text"
                              placeholder="Enter here"
                              className={classes.formInput2}
                              value={labnumber}
                              onChange={(e) => setLabnumber(e.target.value)}
                            />{" "}
                            <br />
                            <div className={classes.formLable}>Last name</div>
                            <Input
                              type="text"
                              placeholder="Enter Last name here"
                              className={classes.formInput2}
                              value={lastname}
                              onChange={(e) => setLastname(e.target.value)}
                            />{" "}
                            <br />
                            <div className={classes.formLable}>Age*</div>
                            <Input
                              type="text"
                              placeholder="Enter here"
                              className={classes.formInput2}
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                            />{" "}
                            <br />
                            <div className={classes.formLable}>Account</div>
                            <FormControl>
                              <Select
                                className={classes.selectInput2}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Category1"}>
                                  Category1
                                </MenuItem>
                                <MenuItem value={"Category2"}>
                                  Category2
                                </MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                            <div className={classes.formLable}>
                              Mobile Number
                            </div>
                            <FormControl>
                              <Select
                                className={classes.selectInput2}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Category1"}>
                                  Category1
                                </MenuItem>
                                <MenuItem value={"Category2"}>
                                  Category2
                                </MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                            <div className={classes.formLable}>Email</div>
                            <Input
                              type="email"
                              placeholder="Enter email here"
                              className={classes.formInput2}
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                            />{" "}
                            <br />
                          </div>
                          <div
                            style={{ width: "30%", marginLeft: "2%" }}
                            className={classes.formDiv3}
                          >
                            <div className={classes.formLable}>Lab Suf*</div>
                            <FormControl>
                              <Select
                                className={classes.selectInput2}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Category1"}>
                                  Category1
                                </MenuItem>
                                <MenuItem value={"Category2"}>
                                  Category2
                                </MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                            <div className={classes.formLable}>Reffered by</div>
                            <FormControl>
                              <Select
                                className={classes.selectInput2}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Category1"}>
                                  Category1
                                </MenuItem>
                                <MenuItem value={"Category2"}>
                                  Category2
                                </MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                            <div className={classes.formLable}>
                              Send Repo by
                            </div>
                            <FormControl>
                              <Select
                                className={classes.selectInput2}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Category1"}>
                                  Category1
                                </MenuItem>
                                <MenuItem value={"Category2"}>
                                  Category2
                                </MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                            <div className={classes.formLable}>City</div>
                            <Input
                              type="text"
                              placeholder="Enter City here"
                              className={classes.formInput2}
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />{" "}
                            <br />
                            <div className={classes.formLable}>Notes</div>
                            <Input
                              type="text"
                              placeholder="Enter Notes here"
                              className={classes.formInput2}
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                            />{" "}
                            <br />
                          </div>
                        </div>
                        <div className={classes.formLable}>
                          <Checkbox {...label} color="default" />
                          Urgent requirement
                        </div>{" "}
                        <div className={classes.formDiv4}>
                          <Buttons className={classes.cancelButton}>
                            Cancel
                          </Buttons>
                          <Buttons className={classes.submitButton}>
                            Submit
                          </Buttons>
                        </div>
                      </FormControl>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div>
                    <div className={classes.formMain}>
                      <FormControl style={{ width: "75%" }}>
                        <div className={classes.formDiv1}>
                          <div className={classes.formDiv2}>
                            <div className={classes.formHeading}>
                              Test information{" "}
                            </div>
                            <div className={classes.formLable}>
                              Select Category
                            </div>
                            <FormControl>
                              <Select
                                className={classes.selectInput}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Category1"}>
                                  Category1
                                </MenuItem>
                                <MenuItem value={"Category2"}>
                                  Category2
                                </MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                          </div>
                        </div>
                      </FormControl>

                      <FormControl
                        style={{
                          width: "75%",
                          margingLeft: "8px",
                          "&.MuiInputLabel-shrink": {
                            transform: "translate(0, 1.5px) scale(0)",
                          },
                          "&.MuiFormLabel-root": {
                            padingRight: "8px",
                          },
                        }}
                      >
                        <InputLabel
                          id="demo-multiple-checkbox-label"
                          style={{
                            width: "80%",
                            "&.MuiInputLabel-shrink": {
                              transform: "translate(0, 1.5px) scale(0)",
                            },
                            "&.MuiInputLabel": {
                              transition: "none",
                              padingRight: "8px",
                            },
                            "&.PrivateNotchedOutline-legendLabelled-39 > span":
                              {
                                display: "none",
                              },
                          }}
                        >
                          Select
                        </InputLabel>
                        <Select
                          className={classes.selectInput}
                          style={{ width: "720px" }}
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={personName}
                          onChange={handleChange2}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                        >
                          <div
                            style={{
                              paddingLeft: "16px",
                              backgroundColor: "#FAFAFA",
                              borderBottom: "1px solid #c4c4c4",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              gap: "22%",
                            }}
                          >
                            <List>Test&nbsp;Name</List>
                            <List>Test&nbsp;ID</List>
                            <List>Rate/price</List>
                          </div>
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                              <ListItemText primary={name} />
                              <ListItemText primary={name} />
                              <ListItemText primary={name} />
                              <Checkbox
                                color="default"
                                checked={personName.indexOf(name) > -1}
                              />
                            </MenuItem>
                          ))}

                          <Button
                            variant="contained"
                            style={{
                              marginLeft: "18px",
                              backgroundColor: "#B82C3A",
                              color: "#FFFFFF",
                              marginTop: "20px",
                            }}
                          >
                            Contained
                          </Button>
                        </Select>
                        <div
                          style={{
                            width: "88%",
                            display: "flex",
                            marginBottom: "10px",
                            border: "1px solid rgba(201, 201, 201, 1)",
                            borderRadius: "4px",
                            backgroundColor: "rgba(201, 201, 201, 0.15)",
                          }}
                        >
                          <List style={{ margin: "0 20px" }}>Blood Group</List>
                          <List style={{ margin: "0 120px" }}>BLOOD GRCT</List>
                          <List style={{ margin: "0 50px" }}>₹564</List>
                          <List style={{ margin: "0 40px" }}>
                            <CrossIcon/>
                          </List>
                        </div>
                        <div
                          style={{
                            width: "88%",
                            display: "flex",
                            marginBottom: "20px",
                            border: "1px solid rgba(201, 201, 201, 1)",
                            borderRadius: "4px",
                            backgroundColor: "rgba(201, 201, 201, 0.15)",
                          }}
                        >
                          <List style={{ margin: "0 20px" }}>Blood Group</List>
                          <List style={{ margin: "0 120px" }}>BLOOD GRCT</List>
                          <List style={{ margin: "0 50px" }}>₹564</List>
                          <List style={{ margin: "0 40px" }}>
                            <CrossIcon/>
                          </List>
                        </div>
                        <div
                          style={{
                            width: "88%",
                            marginBottom: "60px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "space-between",
                          }}
                        >
                          <div>Investigation count (2)</div>
                          <div>Total amount: ₹1128</div>
                        </div>
                      </FormControl>

                      <FormControl style={{ width: "75%" }}>
                        <div className={classes.formDiv1}>
                          <div className={classes.formDiv2}>
                            <h4>Sample </h4>
                            <div className={classes.formLable}>Sample</div>
                            <FormControl>
                              <Select
                                className={classes.selectInput}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Category1"}>
                                  Category1
                                </MenuItem>
                                <MenuItem value={"Category2"}>
                                  Category2
                                </MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                            <div className={classes.formLable}>Bar code ID</div>
                            <Input
                              type="number"
                              placeholder="Enter here"
                              className={classes.formInput}
                            />{" "}
                            <br />
                          </div>
                          <div style={{ marginTop: "60px" }}>
                            <div className={classes.formLable}>
                              Sample status
                            </div>
                            <FormControl>
                              <Select
                                className={classes.selectInput}
                                value={status}
                                onChange={handleChange}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Group1"}>Group1</MenuItem>
                                <MenuItem value={"Group2"}>Group2</MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                          </div>
                        </div>{" "}
                        <div className={classes.formDiv4}>
                          <Buttons className={classes.cancelButton}>
                            Cancel
                          </Buttons>
                          <Buttons className={classes.submitButton}>
                            Submit
                          </Buttons>
                        </div>
                      </FormControl>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="3" sx={{}}>
                  <div>
                    <div className={classes.formMain}>
                      <FormControl>
                        <div className={classes.formDiv1}>
                          <div className={classes.formDiv2}>
                            <div className={classes.formHeading}>
                              Payment details
                            </div>
                            <div className={classes.formLable}>
                              Free of cost:
                              <Checkbox
                                {...label}
                                color="default"
                                checked={isChecked}
                                // onChange={()=>setIsChecked(!isChecked)}
                              />
                            </div>{" "}
                            <br />
                            <div className={classes.formLable}>
                              Total Bill amount
                            </div>
                            <Input
                              type="number"
                              placeholder="Enter here"
                              className={classes.formInput}
                              value={totalamount}
                              onChange={(e) => settotalamount(e.target.value)}
                              disabled={isChecked}
                            />{" "}
                            <br />
                            <div className={classes.formLable}>
                              Discount amount
                            </div>
                            <Input
                              type="number"
                              placeholder="Enter Discount here"
                              className={classes.formInput}
                              value={discount}
                              onChange={(e) => setDiscount(e.target.value)}
                              disabled={isChecked}
                            />{" "}
                            <br />
                            <div className={classes.formLable}>
                              Net amount to pay
                            </div>
                            <Input
                              type="text"
                              placeholder="Enter net amount here"
                              className={classes.formInput}
                              value={netamount}
                              onChange={(e) => setnetamount(e.target.value)}
                              disabled={isChecked}
                            />{" "}
                            <br />
                            <div className={classes.formLable}>Paid amount</div>
                            <Input
                              type="text"
                              placeholder="Enter here"
                              className={classes.formInput}
                              value={paidamount}
                              onChange={(e) => setpaidamount(e.target.value)}
                              disabled={isChecked}
                            />{" "}
                            <br />
                            <div className={classes.formLable}>
                              FOC/Discount by
                            </div>
                            <FormControl>
                              <Select
                                className={classes.selectInput}
                                value={status}
                                onChange={handleChange}
                                disabled={isChecked}
                              >
                                <MenuItem value="" disabled>
                                  <p>Select</p>
                                </MenuItem>
                                <MenuItem value={"Category1"}>
                                  Category1
                                </MenuItem>
                                <MenuItem value={"Category2"}>
                                  Category2
                                </MenuItem>
                              </Select>
                            </FormControl>{" "}
                            <br />
                            <div className={classes.formDiv3}>
                              <div
                                className={classes.formLable}
                                style={{ marginTop: "60px" }}
                              >
                                Payment mode
                              </div>
                              <FormControl>
                                <Select
                                  className={classes.selectInput}
                                  value={status}
                                  onChange={handleChange}
                                  disabled={isChecked}
                                >
                                  <MenuItem value="">
                                    <p>Select</p>
                                  </MenuItem>
                                  <MenuItem value="online">OnLine</MenuItem>
                                  <MenuItem value="cash">Cash</MenuItem>
                                </Select>
                              </FormControl>{" "}
                              <br />
                              {/* <div className={classes.formLable}>Payment no</div>
                            <Input
                              type="text"
                              placeholder="Enter here"
                              className={classes.formInput}
                              value={dueamount}
                              onChange={(e)=>setdueamount(e.target.value)}
                            />{" "} */}
                              <br />
                              <br />
                              <div className={classes.formLable}>
                                Due amount
                              </div>
                              <Input
                                type="text"
                                placeholder="Enter here"
                                className={classes.formInput}
                                value={dueamount}
                                onChange={(e) => setdueamount(e.target.value)}
                                disabled={isChecked}
                              />{" "}
                              <br />
                              <div className={classes.formLable}>
                                FOC/Discount reason
                              </div>
                              <Input
                                type="text"
                                placeholder="Enter Discount reason here"
                                className={classes.formInput}
                                value={discountreason}
                                onChange={(e) =>
                                  setdiscountreason(e.target.value)
                                }
                                disabled={isChecked}
                              />
                              <br />
                            </div>
                          </div>
                        </div>
                        <div className={classes.formDiv4}>
                          <Buttons
                            className={classes.cancelButton}
                            onclick={handleSubmit}
                          >
                            Cancel
                          </Buttons>
                          <Buttons
                            className={classes.submitButton}
                            onclick={handleSubmit}
                          >
                            Submit
                          </Buttons>
                        </div>
                      </FormControl>
                    </div>
                  </div>
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default PatientInformationForm;
