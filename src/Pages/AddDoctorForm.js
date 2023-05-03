import React, { useState } from "react";
import Input from "../Components/Shared/Input";
import { formStyles } from "../Styles/Formstyle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Buttons from "../Components/Shared/Buttons";
import { Box } from "@material-ui/core";
import axios from "axios";
import { API } from "../config";

const AddDoctorForm = () => {
  const classes = formStyles();
  const [rows, setRows] = useState();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const TOKEN = localStorage.getItem("logintoken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`${API}/register-doctor`,{id,phone,email,location,name}, {
        headers: { authtoken: `${TOKEN}` },
      });
      console.log('data',data.data)
    } catch (e) {}
  };

  return (
    <>
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
            <div className={classes.formMain}>
              <FormControl>
                <div className={classes.formDiv1}>
                  <div className={classes.formDiv2}>
                    <div className={classes.formHeading}>New Doctor</div>
                    <div className={classes.formLable}>Name</div>
                    <Input
                      type="text"
                      placeholder="Enter name"
                      className={classes.formInput}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />{" "}
                    <br />
                    <div className={classes.formLable}>Phone number</div>
                    <Input
                      type="number"
                      placeholder="Enter Phone number"
                      className={classes.formInput}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />{" "}
                    <br />
                    <div className={classes.formLable}>Location</div>
                    <Input
                      type="text"
                      placeholder="Enter Location"
                      className={classes.formInput}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />{" "}
                    <br />
                  </div>
                  <div className={classes.formDiv3}>
                    <div className={classes.formLable}>ID</div>
                    <Input
                      type="text"
                      placeholder="Enter ID"
                      className={classes.formInput}
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />{" "}
                    <br />
                    <div className={classes.formLable}>Email Id</div>
                    <Input
                      type="email"
                      placeholder="Enter Email Id"
                      className={classes.formInput}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />{" "}
                    <br />
                    <div className={classes.formLable}>Status</div>
                    <Select
                      className={classes.selectInput}
                      placeholder="Select"
                      label="Select"
                      value={status}
                      onChange={handleChange}
                    >Inactive
                      <MenuItem
                        value={10}
                        style={{ backgroundColor: "transparent" }}
                      >
                        Active
                      </MenuItem>
                      <MenuItem value={20} className={classes.menuInput}>
                        Inactive
                      </MenuItem>
                    </Select>{" "}
                    <br />
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
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctorForm;
