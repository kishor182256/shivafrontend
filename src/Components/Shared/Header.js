import React, { useEffect } from "react";
import { headerStyles } from "../../Styles/HeaderStyle";
import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Shared/Buttons";

const Header = () => {
  const isActive = true;
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const headclasses = headerStyles();

  useEffect(() => {
    navigate('/register-doctor')
  },[]);

  const logout = () =>{
    localStorage.removeItem("logintoken")
    navigate('/')
  }

  return (
    <div className={headclasses.headerMain}>
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            width: "15%",
            backgroundColor: "#B82C3A",
            height: "72px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#F4FFF3",
            fontSize: "16px",
          }}
        >
          LOGO
        </div>
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <Box sx={{ backgroundColor: "#B82C3A", height: "72px" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                style={{
                  height: "72px",
                  border: "none",
                  color: "#F4FFF3",
                  fontSize: "16px",
                }}
                className={headclasses.tabs}
              >
                <Tab
                  className={headclasses.tablist}
                  label="Accounts"
                  value="1"
                />
                <Tab
                  className={headclasses.tablist}
                  label="Master data"
                  value="2"
                />
                <Tab
                  className={headclasses.tablist}
                  label="Patients"
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div style={{ height: "80px" }}>
                <Link to="/register-doctor">
                  <Button
                    active={isActive}
                    className={headclasses.customButton}
                  >
                    Doctor
                  </Button>
                </Link>
                <Link to="/register-user">
                  <Button className={headclasses.customButton}>Users</Button>
                </Link>
                <Link to="/register-collector">
                  <Button className={headclasses.customButton}>
                    Sample collector
                  </Button>
                </Link>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div style={{ height: "80px" }}>
                <Link to='/add-test'>
                <Button
                  component={Link}
                  className={headclasses.customButton}
                >
                  Test
                </Button>
                </Link>
                <Link to='/add-report-group'>
                <Button
                  component={Link}
                  to="/my-page"
                  className={headclasses.customButton}
                >
                  Report Group
                </Button>
                </Link>
                <Link to='/add-report-format'>
                <Button
                  component={Link}
                  to="/my-page"
                  className={headclasses.customButton}
                >
                  Report Format
                </Button>
                </Link>
                <Link to='/add-price-list'>
                <Button
                  component={Link}
                  to="/my-page"
                  className={headclasses.customButton}
                >
                  Price list
                </Button>
                </Link>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div style={{ height: "80px" }}>
              <Link to='/list-patience'>
                <Button
                  component={Link}
                  to="/list-patience"
                  className={headclasses.customButton}
                >
                  Patients
                </Button>
                </Link>
                <Button
                  component={Link}
                  to="/patience-cards"
                  className={headclasses.customButton}
                >
                  Patient cards
                </Button>
                <Link to="/assign-collector">
                <Button
                  component={Link}
                  to="/my-page"
                  className={headclasses.customButton}
                >
                  Sample collectors
                </Button>
                </Link>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
        <div
          style={{
            width: "25%",
            backgroundColor: "#B82C3A",
            height: "72px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#F4FFF3",
              textAlign: "right",
              marginRight: "6px",
              cursor:"pointer"
        
            }}
            onClick={logout}
          >
            <span >Marvin McKinney</span>
            <span>Admin</span>
          </div>
          <div>
            <img src="../../profile.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
