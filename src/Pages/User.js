import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { tableStyles } from "../Styles/AddNewDocStyle";
import Button from "../Components/Shared/Buttons";
// import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { API } from "../config";
import PopoverMenu from "../Components/Shared/Popover";
import ArrowIcon from "../Components/Shared/ArrowIcon";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as XLSX from 'xlsx'
/* import Options from '../Components/Shared/Options'; */

const User = () => {
  const tableclasses = tableStyles();
  const navigate = useNavigate();

  const [rows, setRows] = useState();
  const [newData, setNewData] = useState(false);

  const [name, SetName] = useState("");
  const TOKEN = localStorage.getItem("logintoken");

  const fetchData = async () => {
    const data = await axios.get(`${API}/getuserlist`, {
      headers: { authtoken: `${TOKEN}` },
    });
    setRows(data.data.users);
  };

  const exportToExcel=()=> {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'data.xlsx');
  }

  // const filteredData = data.filter(item =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  useEffect(() => {
    fetchData();
  }, [newData]);

  useEffect(() => {
    if (!TOKEN) {
      navigate("/");
    }
  }, [TOKEN]);

  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const handleDelete = async (id) => {
    const data = await axios.delete(`${API}/delete-user/${id}`, {
      headers: { authtoken: `${TOKEN}` },
    });
    if (data.data.message === "User removed successfully") {
      setNewData(true);
      toast.success("User removed successfully");
      setNewData(false);
    }
  };

  const filteredData = rows?.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div className={tableclasses.root}>
      <div className={tableclasses.body}>
        <div className={tableclasses.header}>
          <div className={tableclasses.name}>
            <div className={tableclasses.h2}>List of Users/Operators</div>
            <div className={tableclasses.specification}>
              345 available doctors
            </div>
          </div>
          <div>
            <Button
              className={tableclasses.addButton}
              onClick={() => navigate("/add-user")}
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.49984 9.88346C5.65889 9.88346 4.1665 8.39108 4.1665 6.55013C4.1665 4.70918 5.65889 3.2168 7.49984 3.2168C9.34079 3.2168 10.8332 4.70918 10.8332 6.55013C10.8332 8.39108 9.34079 9.88346 7.49984 9.88346ZM15.8332 9.88347C15.3729 9.88347 14.9998 9.51038 14.9998 9.05014V7.38347H13.3332C12.8729 7.38347 12.4998 7.01038 12.4998 6.55014C12.4998 6.0899 12.8729 5.7168 13.3332 5.7168H14.9998V4.05014C14.9998 3.5899 15.3729 3.2168 15.8332 3.2168C16.2934 3.2168 16.6665 3.5899 16.6665 4.05014V5.7168H18.3332C18.7934 5.7168 19.1665 6.0899 19.1665 6.55014C19.1665 7.01038 18.7934 7.38347 18.3332 7.38347H16.6665V9.05014C16.6665 9.51038 16.2934 9.88347 15.8332 9.88347Z"
                  fill="white"
                />
                <path
                  d="M0.00054307 17.5494C0.323549 13.5722 3.55159 11.5501 7.48612 11.5501C11.476 11.5501 14.7541 13.4611 14.9983 17.5501C15.008 17.713 14.9983 18.2168 14.3722 18.2168C11.2843 18.2168 6.6956 18.2168 0.606252 18.2168C0.39726 18.2168 -0.0170515 17.7661 0.00054307 17.5494Z"
                  fill="white"
                />
              </svg>{" "}
              &nbsp; Add new user
            </Button>
          </div>
        </div>

        <div className={tableclasses.filterSearch}>
          <div>
            <Button className={tableclasses.filterButton1}>Options</Button>
            <Button className={tableclasses.filterButton2} onClick={exportToExcel}>Export</Button>
            <Button className={tableclasses.filterButton2}>Edit</Button>
            <Button className={tableclasses.filterButton2}>Delete</Button>
            <Button className={tableclasses.filterButton3}>Access right</Button>
          </div>

          <div className={tableclasses.searchContainer}>
            {/* <SearchIcon className={tableclasses.searchIcon} /> */}
            <TextField
              className={tableclasses.searchField}
              /* displayEmpty */
              placeholder="Search"
              /*  defaultValue="Search" */
              variant="standard"
              size="small"
              value={name}
              onChange={(e) => SetName(e.target.value)}
            />
          </div>
        </div>

        <Table className={tableclasses.table}>
          <TableHead className={tableclasses.tableHead}>
            <TableRow>
              <TableCell className={tableclasses.customTableCell}>
                Name
              </TableCell>
              <TableCell className={tableclasses.customTableCell}>ID</TableCell>
              <TableCell className={tableclasses.customTableCell}>
                Email
              </TableCell>
              <TableCell className={tableclasses.customTableCell}>
                Phone number
              </TableCell>
              <TableCell className={tableclasses.customTableCell}>
                Audit lock days
              </TableCell>
              <TableCell className={tableclasses.customTableCell}>
                STATUS
              </TableCell>
              <TableCell className={tableclasses.customTableCell}>
                OPTIONS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData?.map((row) => (
              <TableRow key={row._id}>
                <TableCell
                  component="th"
                  scope="row"
                  className={tableclasses.customTableCell}
                >
                  <div className={tableclasses.profile}>
                    <div>
                      <img alt={row.name} src="../images/Rectangle.png" />
                    </div>
                    <div className={tableclasses.name}>
                      <div>{row.name}</div>
                      <div className={tableclasses.specification}>
                        {row.specification}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className={tableclasses.customTableCell}>
                  <div>{row._id}</div>
                </TableCell>
                <TableCell className={tableclasses.customTableCell}>
                  <div>{row.email}</div>
                </TableCell>
                <TableCell className={tableclasses.customTableCell}>
                  <div>{row.phone}</div>
                </TableCell>
                <TableCell className={tableclasses.customTableCell}>
                  <div>{row.auditlockdays}</div>
                </TableCell>
                <TableCell className={tableclasses.customTableCell}>
                  <Button className={tableclasses.customActive}>
                    <div>{row.status}</div>
                  </Button>
                </TableCell>
                <TableCell className={tableclasses.customTableCell}>
                  <div className={tableclasses.customArrow}>
                    <ArrowIcon />
                    <PopoverMenu
                      data={rows}
                      handleEdit={() => handleEdit(row._id)}
                      handleDelete={() => handleDelete(row._id)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default User;
