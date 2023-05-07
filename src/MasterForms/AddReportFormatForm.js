import React, { useState } from 'react'

import {Box, Tab} from '@material-ui/core';
import {TabContext, TabList, TabPanel} from '@material-ui/lab';
import MenuItem from '@material-ui/core/MenuItem';
import {Checkbox , Select} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import {Radio, RadioGroup, FormControlLabel, } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { formStyles } from '../Styles/Formstyle';
import Buttons from '../Components/Shared/Buttons';
import Input from '../Components/Shared/Input';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: '66%',
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const AddReportFormatForm = () => {
    const classes = formStyles();
    const [value, setValue] = useState('1');
    const [rows, setRows] = useState();
    const [status, setStatus] = useState('');
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 /*  const handleChange = (event) => {
    setStatus(event.target.value);
  }; */

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [personName, setPersonName] = React.useState([]);

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <div  className={classes.root}> 
    <div  className={classes.collectorForm}> 
      <div className={classes.formheader}>
        <div className={classes.formname}>
          <div className={classes.formh2}>Add New Report Group Format </div>
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
      
    <div><Box sx={{padding: '0 8%', borderColor: 'blue'}}>
      <TabContext value={value}  className={classes.tabs}>
        <Box sx={{ padding: '0 30%', }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"
          sx={{ "& .MuiTabs-indicator": { backgroundColor: "black" } }}>
            <Tab label="New Report Format" className={classes.tablist} value="1" />
            <Tab label="Add Test" className={classes.tablist} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{}}>
                <div>
                    <div className={classes.formMain}>
                        <FormControl>
            <div  className={classes.formDiv1}>
              <div  className={classes.formDiv2}>
              <div className={classes.formHeading}>New Report Group Format</div>
              <div className={classes.formLable}>Report ID</div>
              <Input
                type="number"
                placeholder="Enter Test Name"
                className={classes.formInput}
              />{" "}
              <br /> 
              <div className={classes.formLable}>Report group</div>
              <FormControl>
                    <Select  className={classes.selectInput}
                    value={status}
                    onChange={handleChange}
                    displayEmpty
                    >
                    <MenuItem value="" disabled>
                      <p>Select</p>
                    </MenuItem>
                    <MenuItem value={'Group1'}>Group1</MenuItem>
                    <MenuItem value={'Group2'}>Group2</MenuItem>
                    </Select>
                 </FormControl>{" "}
              <br />
              <div className={classes.formLable}>Sample name</div>
              <FormControl>
                    <Select  className={classes.selectInput}
                    value={status}
                    onChange={handleChange}
                    displayEmpty
                    >
                    <MenuItem value="" disabled>
                      <p>Select</p>
                    </MenuItem>
                    <MenuItem value={'Sample1'}>Sample1</MenuItem>
                    <MenuItem value={'Sample2'}>Sample2</MenuItem>
                    </Select>
                 </FormControl>{" "}
              <br />
              </div>
            <div  className={classes.formDiv3}>
              <div className={classes.formLable}>Report name</div>
              <Input
                type="text"
                placeholder="Enter Test ID"
                className={classes.formInput}
              />{" "}
              <br />
              <div className={classes.formLable}>Report short name</div>
              <Input
                type="email"
                placeholder="Enter Unit"
                className={classes.formInput}
              />{" "}
              <br />
              <div className={classes.formLable}>Time arount test(TAT) in minutes</div>
              <Input
                type="text"
                placeholder="Enter Default value"
                className={classes.formInput}
              />{" "}
              <br />
            </div>
            </div> 
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
        <TabPanel value="2" sx={{ }}>

        <div className={classes.formHeading}>List Test Available</div>
        <div>
      <FormControl style={{ width: '80%',
          margingLeft: '8px',
           '&.MuiInputLabel-shrink':{
            transform: 'translate(0, 1.5px) scale(0)',
           }, 
           '&.MuiFormLabel-root':{
     
             padingRight: '8px',
           },}}>
        <InputLabel id="demo-multiple-checkbox-label" 
        style={{ width: '80%',
           '&.MuiInputLabel-shrink':{
            transform: 'translate(0, 1.5px) scale(0)',
           },
      '&.MuiInputLabel': {
      transition:'none',
      padingRight: '8px',
      },
      '&.PrivateNotchedOutline-legendLabelled-39 > span':{
        display: 'none',
      },

    }}>
      Tag</InputLabel>
        <Select
         className={classes.selectInput}
         /*  sx={{
            border: 'none',
            color: '#C9C9C9',
            '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#C9C9C9',
            },
            '&.PrivateNotchedOutline-legendLabelled-39 > span':{
              display: 'none',
            },
          }} */
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange2}
         /*  input={<OutlinedInput label="Tag" />} */
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          
        >
          <div style={{ 
            paddingLeft: '16px',
            backgroundColor: '#FAFAFA',
            borderBottom: '1px solid #c4c4c4',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            gap:'36%',
            }}>
            <div>Test Name</div> <div>Test ID</div>
            </div>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
              <ListItemText primary={name} />
              <Checkbox
                color="default"
                checked={personName.indexOf(name) > -1}
              />
            </MenuItem>
          ))}

          <Button variant="contained" 
          style={{ 
            marginLeft: '18px', 
            backgroundColor:'#B82C3A',
            color: '#FFFFFF',
            marginTop: '20px',
             }}>
            Contained
          </Button>
        </Select>
      </FormControl>

          
    </div>
        <div className={classes.formDiv4}>
              <Buttons className={classes.cancelButton}>
              Cancel
              </Buttons>
              <Buttons className={classes.submitButton}>
              Submit
              </Buttons>
            </div>
        </TabPanel>
      </TabContext>
    </Box></div>

      
    </div> 
  </div> 
  )
}

export default AddReportFormatForm

