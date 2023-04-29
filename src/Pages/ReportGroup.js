import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, Avatar } from '@material-ui/core';
import { tableStyles } from '../Styles/AddNewDocStyle';
import Button from '../Components/Shared/Buttons'
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const ReportGroup = () => {
  const tableclasses = tableStyles();

  const rows = [
    { 
      slno : '1',
      reportgroup: 'Biochemistry',
      prefix: 'BIO',
      lastnum: '123456',
      sufix: 'xyz',
      actions: '...',
    },
    { 
      slno : '1',
      reportgroup: 'Biochemistry',
      prefix: 'BIO',
      lastnum: '123456',
      sufix: 'xyz',
      actions: '...',
    },
    { 
      slno : '1',
      reportgroup: 'Biochemistry',
      prefix: 'BIO',
      lastnum: '123456',
      sufix: 'xyz',
      actions: '...',
    },
    { 
      slno : '1',
      reportgroup: 'Biochemistry',
      prefix: 'BIO',
      lastnum: '123456',
      sufix: 'xyz',
      actions: '...',
    },
    { 
      slno : '1',
      reportgroup: 'Biochemistry',
      prefix: 'BIO',
      lastnum: '123456',
      sufix: 'xyz',
      actions: '...',
    },
    { 
      slno : '1',
      reportgroup: 'Biochemistry',
      prefix: 'BIO',
      lastnum: '123456',
      sufix: 'xyz',
      actions: '...',
    },
    { 
      slno : '1',
      reportgroup: 'Biochemistry',
      prefix: 'BIO',
      lastnum: '123456',
      sufix: 'xyz',
      actions: '...',
    },
    { 
      slno : '1',
      reportgroup: 'Biochemistry',
      prefix: 'BIO',
      lastnum: '123456',
      sufix: 'xyz',
      actions: '...',
    },
    { 
      slno : '1',
      reportgroup: 'Biochemistry',
      prefix: 'BIO',
      lastnum: '123456',
      sufix: 'xyz',
      actions: '...',
    },
    
  ];
  return (
    <div className={tableclasses.root}>  
  <div className={tableclasses.body}>
    <div  className={tableclasses.header}>
      <div className={tableclasses.name}>
        <div className={tableclasses.h2}>ReportGroup</div>
        <div  className={tableclasses.specification}>10 available report category</div>
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
      <Button className={tableclasses.printButton}>Print</Button>
    </div>

    <div className={tableclasses.filterButtonHori}>
      <Button className={tableclasses.filterButtonh1}>Edit</Button>
      <Button className={tableclasses.filterButtonh2}>Delete</Button>
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
          <TableCell className={tableclasses.customHeadName}>Sl no</TableCell>
          <TableCell className={tableclasses.customHeadName}>Report group name</TableCell>
          <TableCell className={tableclasses.customHeadName}>Prefix</TableCell>
          <TableCell className={tableclasses.customHeadName}>Last Number</TableCell>
          <TableCell className={tableclasses.customHeadName}>Sufix</TableCell>
          <TableCell className={tableclasses.customHeadName}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row" className={tableclasses.customTableCell}>
                  <div  className={tableclasses.name}>
                    <div>{row.slno }</div>
                  </div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.reportgroup}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.prefix}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.lastnum}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.sufix}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
            <div className={tableclasses.customArrow}>
            <div></div>{row.actions}
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

export default ReportGroup;

