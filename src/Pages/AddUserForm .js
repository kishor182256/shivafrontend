import React, { useState } from "react";
import Input from "../Components/Shared/Input";
import { formStyles } from "../Styles/Formstyle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Buttons from "../Components/Shared/Buttons";
import axios from "axios";
import { API } from "../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const classes = formStyles();
  const [rows, setRows] = useState();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [auditlockdays, setauditlockdays] = useState();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const TOKEN = localStorage.getItem("logintoken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${API}/register-user`,
        { id, phone, email, auditlockdays, name, status },
        {
          headers: { authtoken: `${TOKEN}` },
        }
      );
      if (data.data.errors) {
        toast.error("User already Registered");
      } else {
        toast.success("User Registered Succesfully");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.collectorForm}>
          <div className={classes.formheader}>
            <div className={classes.formname}>
              <div className={classes.formh2}>Add New User</div>
              <div className={classes.formspecification}>
                {rows?.length} You can add new user into list
              </div>
            </div>
            <div>
              <Buttons
                className={classes.formButton}
                onClick={() => navigate("/register-user")}
              >
                &nbsp; Back to test table
              </Buttons>
            </div>
          </div>

          <div>
            <div className={classes.formMain}>
              <FormControl>
                <div className={classes.formDiv1}>
                  <div className={classes.formDiv2}>
                    <div className={classes.formHeading}>New User</div>
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
                    <div className={classes.formLable}>Audit lock days</div>
                    <Input
                      type="number"
                      placeholder="Enter Audit lock days"
                      className={classes.formInput}
                      value={auditlockdays}
                      onChange={(e) => setauditlockdays(e.target.value)}
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
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>{" "}
                    <br />
                  </div>
                </div>
                <div className={classes.formDiv4}>
                  <Buttons
                    className={classes.cancelButton}
                    onClick={() => navigate("/register-user")}
                  >
                    Cancel
                  </Buttons>

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

export default AddUserForm;
