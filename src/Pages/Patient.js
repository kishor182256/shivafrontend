import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { tableStyles } from "../Styles/AddNewDocStyle";
import Buttons from "../Components/Shared/Buttons";
import axios from "axios";
import { API } from "../config";
import { useNavigate } from "react-router-dom";
import PopoverMenu from "../Components/Shared/Popover";
import AssignCollector from "../Components/Shared/CollectorAssign";
import TableContainer from "@material-ui/core/TableContainer";
import {
  DoctorSvg,
  FilterSvg,
  PendingSvg,
  ResetFilterSvg,
} from "../Components/Shared/UserSvg";

const Patient = () => {
  const tableclasses = tableStyles();

  const TOKEN = localStorage.getItem("logintoken");
  const navigate = useNavigate();

  const [rows, setRows] = useState();
  const [newData, setNewData] = useState(false);
  const [name, setName] = useState();
  const [assign, setAssign] = useState(false);
  const [id, setID] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/getpatiencelist/`, {
        headers: { authtoken: `${TOKEN}` },
        params: { page, rowsPerPage },
      });
      setRows(response.data.patients);
    } catch (error) {
      console.error("Fetching Data Error", error);
    }
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetchData();
  }, [newData, page, rowsPerPage]);

  const handleAssign = (data) => {
    setAssign(true);
  };

  const handleEdit = (data) => {
    console.log("handleEdit", data);
  };

  const filteredData = rows?.filter((item) =>
    item?.name?.toLowerCase().includes(name?.toLowerCase())
  );

  const formatedDate = (newDate) => {
    const date = new Date(newDate);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const formatTime = (newTime) => {
    const time = new Date(newTime);
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const slicedRows = rows?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const header = [
    "SL No",
    "Patient Name",
    "Date & Time",
    "Lab No",
    "Reffered by",
    "Sample",
    "Price",
    "Status",
    "Action",
  ];

  

  return (
    <div className={tableclasses.root}>
      <div className={tableclasses.body}>
        <div className={tableclasses.header}>
          <div className={tableclasses.name}>
            <div className={tableclasses.h2}>Patients</div>
            <div className={tableclasses.specification}>
              {rows?.length} pending patient reports
            </div>
          </div>
          <div>
            <Buttons
              className={tableclasses.addButton}
              onClick={() => navigate("/add-patience")}
            >
              <DoctorSvg /> &nbsp; Add new Patient
            </Buttons>
          </div>
        </div>

        <div className={tableclasses.filterSearch}>
          <div>
            {/* <Buttons className={tableclasses.filterButton1}>
              <FilterSvg />
            </Buttons>
            <Buttons className={tableclasses.filterButton2}>Filter By</Buttons>
            <Buttons className={tableclasses.filterButton2}>Date</Buttons>
            <Buttons className={tableclasses.filterButton2}>Category</Buttons>
            <Buttons className={tableclasses.filterButton2}>
              Test Status
            </Buttons>
            <Buttons className={tableclasses.filterButton3}>
              <ResetFilterSvg />
              <span style={{ color: "#FF8743", marginLeft: 6, text: "center" }}>
                Reset FIlter
              </span>{" "}
            </Buttons> */}
            <Buttons className={tableclasses.printButton}>Print</Buttons>
          </div>

          <div className={tableclasses.searchContainer}>
            <TextField
              className={tableclasses.searchField}
              placeholder="Search"
              variant="standard"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <TableContainer>
          <Table className={tableclasses.table}>
            <TableHead className={tableclasses.tableHead}>
              <TableRow>
                {header.map((header) => {
                  return (
                    <TableCell className={tableclasses.customHeadName}>
                      {header}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedRows?.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={tableclasses.customTableCell}
                    style={{ display: "flex" }}
                  >
                    <div className={tableclasses.name}>
                      <div>{index + 1}</div>
                    </div>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={tableclasses.customTableCell}
                  >
                    <div className={tableclasses.name}>
                      <div>
                        {row.firstname} {row.lastname}
                      </div>
                      <div className={tableclasses.specification}>
                        {row.sampNo}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className={tableclasses.customTableCell}>
                    <div>{formatedDate(row.updatedAt)}</div>
                    <div className={tableclasses.specification}>
                      {formatTime(row.updatedAt)}
                    </div>
                  </TableCell>
                  <TableCell className={tableclasses.customTableCell}>
                    <div>{row.labnumber}</div>
                  </TableCell>
                  <TableCell className={tableclasses.customTableCell}>
                    <div>{row.referedby}</div>
                  </TableCell>
                  <TableCell className={tableclasses.customTableCell}>
                    <div>{row.sample}</div>
                  </TableCell>
                  <TableCell className={tableclasses.customTableCell}>
                    <div>{row?.subcategories?.map((rate) => rate?.Rate)}</div>
                  </TableCell>
                  <TableCell className={tableclasses.customTableCell}>
                    <div
                      style={{
                        text: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <PendingSvg />
                      </div>
                      <div>
                        <span
                          style={{
                            color: "#D48A48",
                            marginLeft: 6,
                            text: "center",
                          }}
                        >
                          {row.status}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className={tableclasses.customTableCell}>
                    <div className={tableclasses.customArrow}>
                      ...
                      <PopoverMenu
                        data={rows}
                        handleEdit={() => handleEdit(row._id)}
                        handleAssign={() => {
                          handleAssign(row._id);
                          setID(row._id);
                        }}
                      />
                    </div>
                  </TableCell>
                  {assign && (
                    <AssignCollector
                      assign={assign}
                      setAssign={setAssign}
                      patienceId={id}
                    />
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={tableclasses.pagination}>
          <div className={tableclasses.name}>
            Showing {page} to {rowsPerPage} of {rows?.length} entries
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Patient;
