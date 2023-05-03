import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Popover } from '@material-ui/core';

const PopoverMenu = ({ data, handleEdit, handleDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        {/* <MoreVertIcon /> */}
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => handleEdit(data)}>
          <ListItemIcon>
            {/* <Edit /> */}
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
        <MenuItem onClick={() =>{ handleDelete(data);handleClose()}}>
          <ListItemIcon>
            {/* <Delete /> */}
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Popover>
    </div>
  );
};

export default PopoverMenu;
