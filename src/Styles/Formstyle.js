import { makeStyles   } from '@material-ui/core/styles';

export const formStyles = makeStyles({
   
    myDiv5:{
        marginTop: 80,
       backgroundColor: '#FFFFFF',
       borderRadius: '14px',
       width: 480,
       height: 430,
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
      },
      selectInput:{
       width : '362px',
       fontFamily: 'Poppins',
       margin: '40px 0 0 40px',
       '&.MuiInput-underline:before':{
            borderBottom: "none",
       },
      
          
     },

     selectLabel:{
        '&.MuiInputLabel-shrink':{
            transform: 'none',
        }
     },

     customInput: {
        width : '362px',
        fontFamily: 'Poppins',
        marginTop: '10px',
        '& .MuiInputBase-input': { /* input field */
              color: '#676767',
              fontSize: '17px',
              fontFamily: 'Poppins',
              fontWeight: 900,
            },
        '& .MuiInputBase-root': { /* input border */
          borderRadius: '14px',
          border: '1px solid #DDDDDD',
          height : '53px',
          marginTop: '6px',
        },
        '&  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent', /* remove input bordercolor focus */
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#DDDDDD',
        },
        
      },
    });     