import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { tableStyles } from "../Styles/AddNewDocStyle";
import axios from "axios";
import { API } from "../config";
import Buttons from "../Components/Shared/Buttons";
import PopoverMenu from "../Components/Shared/Popover";
import ArrowIcon from "../Components/Shared/ArrowIcon";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DoctorSvg } from "../Components/Shared/UserSvg";
import { getdoctorlist } from "../redux/accounts/action";
import { useDispatch, useSelector } from "react-redux";

const Doctor = () => {
  const tableclasses = tableStyles();
  const navigate = useNavigate();

  
  const [newData, setNewData] = useState(false);
  const TOKEN = localStorage.getItem("logintoken");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.patience.data.doctors);
  const [rows, setRows] = useState(data);
  console.log();
  

  

  useEffect(() => {
    dispatch(getdoctorlist());
    setRows(data)
  }, [newData]);

  useEffect(() => {
    if (!TOKEN) {
      navigate("/");
    }
  }, [TOKEN]);

  const handleEdit = (id) => {
    navigate(`/edit-doctor/${id}`);
  };

  const handleDelete = async (id) => {
     const data = await axios.delete(`${API}/delete-doctor/${id}`, {
      headers: { authtoken: `${TOKEN}` },
    });
    if (data?.data?.message === "Doctor removed successfully") {
      setNewData(true);
      toast.success("Doctor removed successfully");
      setNewData(false);
    }
  };

  const header = [
    "Name",
    "ID",
    "Email",
    " Phone Number",
    "Location",
    "STATUS",
    "OPTIONS",
  ];

  return (
    <div className={tableclasses.root}>
      <div className={tableclasses.body}>
        <div className={tableclasses.header}>
          <div className={tableclasses.name}>
            <div className={tableclasses.h2}>List of doctors</div>
            <div className={tableclasses.specification}>
              {rows?.length} available doctors
            </div>
          </div>
          <div>
            <Buttons
              className={tableclasses.addButton}
              onClick={() => navigate("/add-doctor")}
            >
              <DoctorSvg /> &nbsp; Add new doctor
            </Buttons>
          </div>
        </div>
        <Table className={tableclasses.table}>
          <TableHead className={tableclasses.tableHead}>
            <TableRow>
              {header.map((header) => {
                return (
                  <TableCell className={tableclasses.customTableCell}>
                    {header}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow key={row.email}>
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
                  <div>{row.location}</div>
                  <div className={tableclasses.specification}>{row.area}</div>
                </TableCell>
                <TableCell className={tableclasses.customTableCell}>
                  <Buttons className={tableclasses.customActive}>
                    <div>{row.status}</div>
                  </Buttons>
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

export default Doctor;
