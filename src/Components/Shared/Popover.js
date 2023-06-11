import React, { useEffect, useState } from "react";
import {
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@material-ui/core";

const PopoverMenu = ({ data, handleEdit, handleDelete,handleAssign,handleView }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [path, setPath] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  useEffect(() => {
    const path = window.location.pathname;
    const extractedValue = path.split("/").pop();
    setPath(extractedValue);
  }, [path]);

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <IconButton onClick={handleClick}>{/* <MoreVertIcon /> */}</IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => handleEdit(data)}>
          <ListItemIcon>{/* <Edit /> */}</ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleDelete(data);
            handleClose();
          }}
        >
          <ListItemIcon>{/* <Delete /> */}</ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>

        {path && path === "list-patience" ? (
          <>
            <MenuItem
              onClick={() => {
                handleView(data);
                handleClose();
              }}
            >
              <ListItemIcon>{/* <Delete /> */}</ListItemIcon>
              <ListItemText primary="View" />
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleAssign(data._id);
                handleClose();
              }}
            >
              <ListItemIcon>{/* <Delete /> */}</ListItemIcon>
              <ListItemText primary="Assign" />
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleAssign(data._id);
                handleClose();
              }}
            >
              <ListItemIcon>{/* <Delete /> */}</ListItemIcon>
              <ListItemText primary="Report" />
            </MenuItem>
          </>
        ) : null}
      </Popover>
    </div>
  );
};

export default PopoverMenu;
