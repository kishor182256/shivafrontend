import React, { useState } from 'react'
import Button from '../Components/Shared/Button'
import Input from '../Components/Shared/Input'
import { useStyles } from '../Styles/InputStyle';
import { AdminLogin } from '../Api/auth.js';
/* import { createTheme, ThemeProvider } from '@material-ui/core/styles'; */
import { Typography } from '@material-ui/core';


const Login = () => {
    const classes = useStyles();

    /* const theme = createTheme({
      typography: {
        fontFamily: 'Poppins',
      },
    }); */

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    console.log(email, password)

    const handleLogin =(e)=>{
      e.preventDefault();
      console.log(email,password);
      AdminLogin(email,password).then((response)=>{
        console.log(response)
      })
      
    }

  return (
      <>
     {/*  <ThemeProvider theme={theme}> */}
  <div className={classes.myDiv}>
        <div className={classes.myDiv1}>
          {/* <img src='/images/VectorBody.png' width={1440} height={698}/> */}
          <p className={classes.textLogo}>LOGO</p>
        </div>
        <div className={classes.myDiv2}>
            <div>
                  <p className={classes.maintext1}>Lorem Ipsum is <br/>  
                    simply <span className={classes.subtext1}>dummy text</span> </p><br/>
                  <p className={classes.subtitle1}>Lorem Ipsum is simply dummy text of the <br/>
                    printing and typesetting industry. </p>
            </div>

            <div>
                  <img src='/images/login-img.png'/>
            </div>

            <div className={classes.myDiv3}>
                <div className={classes.myDiv4}>
                  <div>
                    <p className={classes.maintext2}>Log In Here</p>
                    <p className={classes.subtitle2}>Manage all of Patients reports and view <br/> 
                    referred doctor details</p>
                  </div> 
                
                  <form onSubmit={handleLogin}>
                <Input 
                    type="email" 
                    placeholder="Mobile / Email ID" 
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className={classes.customInput}
                /> <br/>
                <Input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className={classes.customInput}
                /> <br/> <br/>
                <span className={classes.caption}>Forget Password?</span> <br/> <br/>
                <Button  
                className={classes.customButton} 
                > Login
                </Button> 
                  </form>
                </div>
            </div>
        </div>
    </div>
    {/* </ThemeProvider> */} </>
  )
}

export default Login