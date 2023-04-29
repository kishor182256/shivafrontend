import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, Avatar } from '@material-ui/core';
import { tableStyles } from '../Styles/AddNewDocStyle';
import Button from '../Components/Shared/Buttons'
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const AddNewTest = () => {
  const tableclasses = tableStyles();

  const rows = [
    { 
      testid : 'ad',
      testname: 'Albumin',
      unit: 'gms/dl',
      dept: 'GEN',
      options: '1|Negative 2|Positive',
      actions: '...',
    },
    { 
      testid : 'ad',
      testname: 'Albumin',
      unit: 'gms/dl',
      dept: 'GEN',
      options: '1|Negative 2|Positive',
      actions: '...',
    },
    { 
      testid : 'ad',
      testname: 'Albumin',
      unit: 'gms/dl',
      dept: 'GEN',
      options: '1|Negative 2|Positive',
      actions: '...',
    },
    { 
      testid : 'ad',
      testname: 'Albumin',
      unit: 'gms/dl',
      dept: 'GEN',
      options: '1|Negative 2|Positive',
      actions: '...',
    },
    { 
      testid : 'ad',
      testname: 'Albumin',
      unit: 'gms/dl',
      dept: 'GEN',
      options: '1|Negative 2|Positive',
      actions: '...',
    },
    { 
      testid : 'ad',
      testname: 'Albumin',
      unit: 'gms/dl',
      dept: 'GEN',
      options: '1|Negative 2|Positive',
      actions: '...',
    },
    { 
      testid : 'ad',
      testname: 'Albumin',
      unit: 'gms/dl',
      dept: 'GEN',
      options: '1|Negative 2|Positive',
      actions: '...',
    },
    { 
      testid : 'ad',
      testname: 'Albumin',
      unit: 'gms/dl',
      dept: 'GEN',
      options: '1|Negative 2|Positive',
      actions: '...',
    },
    { 
      testid : 'ad',
      testname: 'Albumin',
      unit: 'gms/dl',
      dept: 'GEN',
      options: '1|Negative 2|Positive',
      actions: '...',
    },
    
  ];
  return (
    <div className={tableclasses.root}>  
  <div className={tableclasses.body}>
    <div  className={tableclasses.header}>
      <div className={tableclasses.name}>
        <div className={tableclasses.h2}>Tests</div>
        <div  className={tableclasses.specification}>345 available test</div>
      </div>
      <div>
        <Button className={tableclasses.addButton}> 
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M7.49984 9.88346C5.65889 9.88346 4.1665 8.39108 4.1665 6.55013C4.1665 4.70918 5.65889 3.2168 7.49984 3.2168C9.34079 3.2168 10.8332 4.70918 10.8332 6.55013C10.8332 8.39108 9.34079 9.88346 7.49984 9.88346ZM15.8332 9.88347C15.3729 9.88347 14.9998 9.51038 14.9998 9.05014V7.38347H13.3332C12.8729 7.38347 12.4998 7.01038 12.4998 6.55014C12.4998 6.0899 12.8729 5.7168 13.3332 5.7168H14.9998V4.05014C14.9998 3.5899 15.3729 3.2168 15.8332 3.2168C16.2934 3.2168 16.6665 3.5899 16.6665 4.05014V5.7168H18.3332C18.7934 5.7168 19.1665 6.0899 19.1665 6.55014C19.1665 7.01038 18.7934 7.38347 18.3332 7.38347H16.6665V9.05014C16.6665 9.51038 16.2934 9.88347 15.8332 9.88347Z" fill="white"/>
          <path d="M0.00054307 17.5494C0.323549 13.5722 3.55159 11.5501 7.48612 11.5501C11.476 11.5501 14.7541 13.4611 14.9983 17.5501C15.008 17.713 14.9983 18.2168 14.3722 18.2168C11.2843 18.2168 6.6956 18.2168 0.606252 18.2168C0.39726 18.2168 -0.0170515 17.7661 0.00054307 17.5494Z" fill="white"/>
        </svg> &nbsp;
        Add new test</Button>
      </div>  
    </div>

    <div className={tableclasses.filterSearch}>
    <div>
      <Button className={tableclasses.filterButton1}>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.63119 3.349H13.3687C13.4657 3.34903 13.5606 3.37727 13.6418 3.43027C13.723 3.48327 13.7871 3.55875 13.8261 3.64752C13.8652 3.73628 13.8776 3.83449 13.8619 3.93019C13.8461 4.02589 13.8029 4.11494 13.7374 4.1865L9.63119 8.70525C9.54573 8.79672 9.49873 8.91757 9.49994 9.04275V12.5802C9.5007 12.6633 9.48048 12.7453 9.44115 12.8185C9.40182 12.8917 9.34465 12.9538 9.27494 12.999L7.27494 14.3302C7.19992 14.3797 7.11297 14.408 7.02323 14.4121C6.9335 14.4163 6.84429 14.3963 6.76499 14.3541C6.68569 14.3118 6.61922 14.2491 6.57258 14.1723C6.52594 14.0955 6.50085 14.0076 6.49994 13.9177V9.04275C6.50114 8.91757 6.45415 8.79672 6.36869 8.70525L2.26244 4.1865C2.19697 4.11494 2.15373 4.02589 2.13798 3.93019C2.12224 3.83449 2.13466 3.73628 2.17374 3.64752C2.21282 3.55875 2.27688 3.48327 2.3581 3.43027C2.43932 3.37727 2.5342 3.34903 2.63119 3.349V3.349Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </Button>
      <Button className={tableclasses.filterButton2}>Filter By</Button>
      <Button className={tableclasses.filterButton2}>Department</Button>
      <Button className={tableclasses.filterButton2}>Aphabets</Button>
      <Button className={tableclasses.filterButton2}>Sort by</Button>
      <Button className={tableclasses.filterButton3} >
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.9873 6.58026H1.9873V3.58026" stroke="#FF8743" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.1123 12.2365C4.88131 13.0061 5.86131 13.5304 6.92833 13.743C7.99535 13.9556 9.10145 13.8469 10.1067 13.4308C11.112 13.0146 11.9712 12.3097 12.5757 11.4051C13.1803 10.5005 13.503 9.43699 13.503 8.349C13.503 7.26101 13.1803 6.19747 12.5757 5.2929C11.9712 4.38833 11.112 3.68338 10.1067 3.26723C9.10145 2.85108 7.99535 2.74243 6.92833 2.95501C5.86131 3.16759 4.88131 3.69186 4.1123 4.4615L1.9873 6.58025" stroke="#FF8743" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
       <span style={{color: '#FF8743', marginLeft: 6, text: 'center'}}>Reset FIlter</span> </Button>
      <Button className={tableclasses.printButton}>Print</Button>
    </div>

    <div className={tableclasses.filterButtonHori}>
      <Button className={tableclasses.filterButtonh1}>Edit</Button>
      <Button className={tableclasses.filterButtonh2}>Delete</Button>
      <Button className={tableclasses.filterButtonh4}>R. range</Button>
    </div>

    <div className={tableclasses.searchContainer}>
      <SearchIcon    className={tableclasses.searchIcon} />
      <TextField
        className={tableclasses.searchField}
        placeholder="Search"
        variant="standard"
        size="small"
      />
    </div>
    </div>

    <Table className={tableclasses.table}>
      <TableHead className={tableclasses.tableHead}>
        <TableRow >
          <TableCell className={tableclasses.customHeadName}>Test ID</TableCell>
          <TableCell className={tableclasses.customHeadName}>Test name</TableCell>
          <TableCell className={tableclasses.customHeadName}>Unit</TableCell>
          <TableCell className={tableclasses.customHeadName}>Department</TableCell>
          <TableCell className={tableclasses.customHeadName}>Options</TableCell>
          <TableCell className={tableclasses.customHeadName}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row" className={tableclasses.customTableCell}>
                  <div  className={tableclasses.name}>
                    <div>{row.testid}</div>
                  </div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.testname}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.unit}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.dept}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.options}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
            <div className={tableclasses.customArrow}>
            {row.actions}
            </div>

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <div className={tableclasses.pagination}>
    <div className={tableclasses.name}>Showing 1 to 3 of 3 entries</div>
    <div>
      <Button className={tableclasses.pageButton}>Previous</Button>
      <Button className={tableclasses.numButton}>1</Button>
      <Button className={tableclasses.pageButton}>Next</Button>
    </div>
    {/* <div></div> */}
    </div>
    </div>
    </div>
  )
}

export default AddNewTest;

