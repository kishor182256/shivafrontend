import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, Avatar } from '@material-ui/core';
import { tableStyles } from '../Styles/AddNewDocStyle';
import Button from '../Components/Shared/Button'

const AddNewDoctor = () => {
  const tableclasses = tableStyles();

  const rows = [
    { 
      image: '../images/Rectangle.png' ,
      id: 87364523, 
      name: 'John Doe', 
      specification: 'Dermatologists',
      email: 'Brooklyn @mail.com',
      number: '9876543210',
      location: 'Jayanagar',
      area: 'xyz',
      status: 'Active',
    },
    { 
      image: '../images/Rectangle.png' ,
      id: 87364523, 
      name: 'John Doe', 
      specification: 'Dermatologists',
      email: 'Brooklyn @mail.com',
      number: '9876543210',
      location: 'Jayanagar',
      area: 'xyz',
      status: 'Inactive',
    },
    { 
      image: '../images/Rectangle.png' ,
      id: 87364523, 
      name: 'John Doe', 
      specification: 'Dermatologists',
      email: 'Brooklyn @mail.com',
      number: '9876543210',
      location: 'Jayanagar',
      area: 'xyz',
      status: 'Active',
    },
    { 
      image: '../images/Rectangle.png' ,
      id: 87364523, 
      name: 'John Doe', 
      specification: 'Dermatologists',
      email: 'Brooklyn @mail.com',
      number: '9876543210',
      location: 'Jayanagar',
      area: 'xyz',
      status: 'Active',
    },
    { 
      image: '../images/Rectangle.png' ,
      id: 87364523, 
      name: 'John Doe', 
      specification: 'Dermatologists',
      email: 'Brooklyn @mail.com',
      number: '9876543210',
      location: 'Jayanagar',
      area: 'xyz',
      status: 'Active',
    },
    { 
      image: '../images/Rectangle.png' ,
      id: 87364523, 
      name: 'John Doe', 
      specification: 'Dermatologists',
      email: 'Brooklyn @mail.com',
      number: '9876543210',
      location: 'Jayanagar',
      area: 'xyz',
      status: 'Active',
    },
    { 
      image: '../images/Rectangle.png' ,
      id: 87364523, 
      name: 'John Doe', 
      specification: 'Dermatologists',
      email: 'Brooklyn @mail.com',
      number: '9876543210',
      location: 'Jayanagar',
      area: 'xyz',
      status: 'Inactive',
    },
    { 
      image: '../images/Rectangle.png' ,
      id: 87364523, 
      name: 'John Doe', 
      specification: 'Dermatologists',
      email: 'Brooklyn @mail.com',
      number: '9876543210',
      location: 'Jayanagar',
      area: 'xyz',
      status: 'Active',
    },
  ];
  return (
    <div className={tableclasses.root}>  
  <div className={tableclasses.body}>
    <div  className={tableclasses.header}>
      <div className={tableclasses.name}>
        <div className={tableclasses.h2}>List of doctors</div>
        <div  className={tableclasses.specification}>345 available doctors</div>
      </div>
      <div>
        <Button className={tableclasses.addButton}> 
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M7.49984 9.88346C5.65889 9.88346 4.1665 8.39108 4.1665 6.55013C4.1665 4.70918 5.65889 3.2168 7.49984 3.2168C9.34079 3.2168 10.8332 4.70918 10.8332 6.55013C10.8332 8.39108 9.34079 9.88346 7.49984 9.88346ZM15.8332 9.88347C15.3729 9.88347 14.9998 9.51038 14.9998 9.05014V7.38347H13.3332C12.8729 7.38347 12.4998 7.01038 12.4998 6.55014C12.4998 6.0899 12.8729 5.7168 13.3332 5.7168H14.9998V4.05014C14.9998 3.5899 15.3729 3.2168 15.8332 3.2168C16.2934 3.2168 16.6665 3.5899 16.6665 4.05014V5.7168H18.3332C18.7934 5.7168 19.1665 6.0899 19.1665 6.55014C19.1665 7.01038 18.7934 7.38347 18.3332 7.38347H16.6665V9.05014C16.6665 9.51038 16.2934 9.88347 15.8332 9.88347Z" fill="white"/>
          <path d="M0.00054307 17.5494C0.323549 13.5722 3.55159 11.5501 7.48612 11.5501C11.476 11.5501 14.7541 13.4611 14.9983 17.5501C15.008 17.713 14.9983 18.2168 14.3722 18.2168C11.2843 18.2168 6.6956 18.2168 0.606252 18.2168C0.39726 18.2168 -0.0170515 17.7661 0.00054307 17.5494Z" fill="white"/>
        </svg> &nbsp;
       Add new doctor</Button>
      </div>  
    </div>
    <Table className={tableclasses.table}>
      <TableHead className={tableclasses.tableHead}>
        <TableRow >
          <TableCell className={tableclasses.customTableCell}>Name</TableCell>
          <TableCell className={tableclasses.customTableCell}>ID</TableCell>
          <TableCell className={tableclasses.customTableCell}>Email</TableCell>
          <TableCell className={tableclasses.customTableCell}>Phone number</TableCell>
          <TableCell className={tableclasses.customTableCell}>Location</TableCell>
          <TableCell className={tableclasses.customTableCell}>STATUS</TableCell>
          <TableCell className={tableclasses.customTableCell}>OPTIONS</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row" className={tableclasses.customTableCell}>
              <div className={tableclasses.profile}>
                <div><img alt={row.name} src={row.image} /></div>
                  <div  className={tableclasses.name}>
                    <div>{row.name}</div>
                    <div  className={tableclasses.specification}>{row.specification}</div>
                  </div>
                </div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.id}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.email}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.number}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <div>{row.location}</div>
              <div className={tableclasses.specification}>{row.area}</div>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
              <Button  className={tableclasses.customActive} ><div >{row.status}</div></Button>
            </TableCell>
            <TableCell className={tableclasses.customTableCell}>
            <div className={tableclasses.customArrow}>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.3" x="3.43604" y="11.5373" width="1.64102" height="7.38461" rx="0.820512" transform="rotate(-90 3.43604 11.5373)" fill="#181C32"/>
              <path d="M9.41987 15.0597C9.09944 15.3801 9.09944 15.8996 9.41987 16.22C9.7403 16.5405 10.2598 16.5405 10.5803 16.22L15.5033 11.297C15.814 10.9863 15.8248 10.4862 15.528 10.1623L11.0152 5.23925C10.709 4.9052 10.1899 4.88264 9.85588 5.18885C9.52183 5.49506 9.49926 6.01409 9.80547 6.34813L13.7874 10.6921L9.41987 15.0597Z" fill="#181C32"/>
            </svg>
            </div>

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
    </div>
  )
}

export default AddNewDoctor;

