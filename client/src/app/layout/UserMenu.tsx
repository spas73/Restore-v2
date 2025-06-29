import {
  Button,
  Menu,
  Fade,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { type User } from "../models/user";
import { History, Inventory, Logout, Person } from "@mui/icons-material";
import { useLogoutMutation } from "../../features/account/accountApi";
import { Link } from "react-router-dom";

type Props = {
  user: User;
};

export default function UserMenu({ user }: Props) {
  const [logout] = useLogoutMutation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        color="inherit"
        size="large"
        sx={{ fontSize: "1.1rem" }}
      >
        {user.email}
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            "aria-labelledby": "fade-button",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slots={{
          transition: Fade,
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText>My profile</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/orders" onClick={handleClose}>
          <ListItemIcon>
            <History />
          </ListItemIcon>
          <ListItemText>My orders</ListItemText>
        </MenuItem>
        {user.roles.includes("Admin") && (
          <MenuItem component={Link} to="/inventory" onClick={handleClose}>
            <ListItemIcon>
              <Inventory />
            </ListItemIcon>
            <ListItemText>Inventory</ListItemText>
          </MenuItem>
        )}
        <Divider />
        <MenuItem
          //onClick={logout}
          onClick={async () => {
            handleClose();
            await logout({}); 
          }}
        >
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}
