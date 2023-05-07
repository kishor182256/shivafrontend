import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { Box } from '@material-ui/core';
import { formStyles } from '../Styles/Formstyle';
import Buttons from '../Components/Shared/Buttons';
import Input from '../Components/Shared/Input';
import axios from 'axios';
import { API } from '../config';

const AddReportGroupForm = () => {
    const classes = formStyles();
    const [name, setName] = useState();
    const [prefix, setPrefix] = useState();
    const [suffix, setSuffix] = useState();
    const [lastnumber, setLastnumber] = useState();


  

  const TOKEN = localStorage.getItem("logintoken");


    const handleSubmit = async (e) => {
      console.log('---->','handleSubmitcategory')
      e.preventDefault();
      try {
        const data = await axios.post(
          `${API}/addtestcategory`,
          { name, prefix, suffix, lastnumber},
          {
            headers: { authtoken: `${TOKEN}` },
          }
        );
      } catch (e) {
        console.log(e);
  
      }
  }
    

  return (
    <>  
    <div  className={classes.root}> 
      <div  className={classes.collectorForm}> 
        <div className={classes.formheader}>
          <div className={classes.formname}>
            <div className={classes.formh2}>Add New Report category/group </div>
            <div className={classes.formspecification}>
              You can create new report group here 
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
              <div  className={classes.formDiv1}>
                <div  className={classes.formDiv2}>
                <div className={classes.formHeading}> New Report category/group </div>
                <div className={classes.formLable}>Report group name</div>
                <Input
                  type="text"
                  placeholder="Enter name"
                  className={classes.formInput}
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />{" "}
                <br />
                <div className={classes.formLable}>Last number</div>
                <Input
                  type="text"
                  placeholder="Enter Phone lastdigits"
                  className={classes.formInput}
                  value={lastnumber}
                  onChange={(e)=>setLastnumber(e.target.value)}
                />{" "}
                <br />
                </div>
              <div  className={classes.formDiv3}>
                <div className={classes.formLable}>Prefix</div>
                <Input
                  type="text"
                  placeholder="Enter Prefix"
                  className={classes.formInput}
                  value={prefix}
                  onChange={(e)=>setPrefix(e.target.value)}
                />{" "}
                <br />
                <div className={classes.formLable}>Sufix</div>
                <Input
                  type="text"
                  placeholder="Enter Suffix"
                  className={classes.formInput}
                  value={suffix}
                  onChange={(e)=>setSuffix(e.target.value)}
                />{" "}
                <br />
              </div>
              </div> 
              <div className={classes.formDiv4}>
                <Buttons className={classes.cancelButton}>
                Cancel
                </Buttons>
                <Buttons className={classes.submitButton} onClick={handleSubmit}>
                ggggg
                </Buttons>
              </div>
            </FormControl>
          </div>
        </div>    
        
      </div> 
    </div> 




    
   </>
  )
}

export default AddReportGroupForm