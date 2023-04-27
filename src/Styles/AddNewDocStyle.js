import { makeStyles   } from '@material-ui/core/styles';

export const tableStyles = makeStyles({
    root: {
        background: '#f5f5f5', // Set your desired background color
        paddingBottom: '3%',
        paddingTop: '3%',
        fontFamily: 'Poppins',
      },
    table: {
        border: 'none',
        width : '90%',
        '&.MuiTableCell-root':{
            borderBottom : 'none'
        },
      },
      tableHead: {
        background: '#FAFAFA', // Set your desired background color
        borderRadius: '6px',height: '43px',
        margingBottom: '20px',
        fontFamily: 'Poppins',
        '& .MuiTableHead-root': {
            width: '96%', // Set your desired width
            height: '43px', // Set your desired height
            color: '#B5B5C3',
            boxShadow: 'none',
          },
    },
      customTableCell: {
    borderBottom: 'none',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 600,
    color: '#464E5F',
  },
  customHeadName: {
    borderBottom: 'none',
    fontSize: '12px',
    fontWeight: 600,
    color: '#B5B5C3',
    fontFamily: 'Poppins',
  },
      header: {
        width : '90%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'left',
        paddingTop: '3%',
        paddingBottom: '3%',
        fontFamily: 'Poppins',
      },
      h2:{
        fontSize: '18px',
        fontWeight: 500,
        color: '#212121',
        fontFamily: 'Poppins',
      },
      customRow: {
        background: 'lightblue',
        fontFamily: 'Poppins',
      },
      customActive: {
        backgroundColor: '#F4FFF3',
        borderRadius: '6px',
        height : '26px',
        width : '74px',
        fontFamily: 'Poppins',
        fontSize: '11px',
        '&.MuiButton-contained':{
            backgroundColor: '#F4FFF3',
            color: '#5F8D4E',
            boxShadow: 'none',
            textTransform: 'none',
        },
        '&:hover': {
            backgroundColor: 'none',
        },
    },
    customArrow: {
        backgroundColor: '#FAFAFA',
        height : '32px',
        width : '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6px',
    },
    body: {
        fontFamily: 'Poppins',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '12px',
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '3%',
    },
    image: {
        width: '50px',
        height: '50px',
        borderRadius: '6px',
      },
    MuiAvatar:{
        borderRadius: '6px',
    },
    profile: {
        display: 'flex',
    },
    name: {
        fontFamily: 'Poppins',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        flexDirection: 'column',
        paddingLeft: '12px',
        fontSize: '14px',
        color: '#464E5F',
    },
    specification:{
        color: '#B5B5C3',
        fontSize: '12px',
        fontFamily: 'Poppins',
    },
      addButton: {
        backgroundColor: '#B82C3A',
        borderRadius: '6px',
        height : '40px',
        width : '170px',
        fontFamily: 'Poppins',
        '&.MuiButton-contained':{
            backgroundColor: '#B82C3A',
            color: '#FFFFFF',
            fontSize: '10px',
            boxShadow: 'none',
            textTransform: 'none',
        }
    }, 
    filterSearch:{
        width : '90%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'left',
        fontFamily: 'Poppins',
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '250px',
        height: '38px',
       marginBottom: '40px',
        borderRadius: '63px',
        backgroundColor: '#FAFAFA',
        border: '1px solid #B5B5C3',
        fontFamily: 'Poppins',
      },
      
      searchField: {
        alignItems: 'center',
        fontFamily: 'Poppins',
        '& .MuiFormLabel-root.Mui-focused':{
            color: '#B5B5C3',
            },
            '& label': {
                transform: 'none', // set the label transform to none to prevent the label animation
              },
              '& .MuiInputLabel-animated': {
                transition: 'none', // disable the label transition to prevent the label popup
              },
              '&:hover .MuiInputLabel-animated': {
                transition: 'none', // disable the label transition on hover to prevent the label popup
              }, 
              '& .MuiInput-underline:before': {
                borderBottom: 'none',
                content: 'none',
              },
              '&:hover .MuiInput-underline:before': {
                borderBottom: 'none', // remove the underline on hover
              },
              '& .MuiInput-underline:after': {
                  borderBottom: 'none',
                },
                '&:hover .MuiInput-underline:after': {
                  borderBottom: 'none', // remove the underline on hover
                },
        },
      searchIcon:{
          color: '#B5B5C3',
          marginLeft: '12px',
          fontFamily: 'Poppins',
      },

      filterButton1: {
        height : '49px',
        width : '89px',
        fontFamily: 'Poppins',
        '&.MuiButton-contained':{
            backgroundColor: '#273142',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 500,
            boxShadow: 'none',
            borderRadius: '6px  0 0 6px',
            borderRight: '1px solid #3A4251',
            textTransform: 'none',
        }
    },
    filterButton2: {
        height : '49px',
        width : '89px',
        fontFamily: 'Poppins',
        fontWeight: 500,
        '&.MuiButton-contained':{
            backgroundColor: '#273142',
            color: '#FFFFFF',
            fontSize: '14px',
            boxShadow: 'none',
            borderRadius: '0  0 0 0',
            borderRight: '1px solid #3A4251',
            textTransform: 'none',
        }
    },
    filterButton3: {
        height : '49px',
        width : '132px',
        fontFamily: 'Poppins',
        fontWeight: 500,
        '&.MuiButton-contained':{
            backgroundColor: '#273142',
            color: '#FFFFFF',
            fontSize: '14px',
            boxShadow: 'none',
            borderRadius: '0 6px 6px 0',
            textTransform: 'none',
        }
    },
    filterButtonHori:{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        flexDirection: 'column',
        backgroundColor: '#273142',
        padding: 20,
        borderRadius: '15px',
    },
    filterButtonh1: {
        height : '33px',
        width : '58px',
        fontFamily: 'Poppins',
        '&.MuiButton-contained':{
            backgroundColor: '#273142',
            color: '#FFFFFF',
            fontSize: '14px',
            boxShadow: 'none',
            borderRadius: '25px',
            textTransform: 'none',
            border: '1px solid #B5B5C3',
            marginBottom: 10,
        }
    },
});