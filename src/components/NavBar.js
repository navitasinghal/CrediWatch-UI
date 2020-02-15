import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/More";

import "./navbar.css";

function NavBar() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Credit Default Risk
          </Typography>
          <div>
            <IconButton
              aria-label="show more"
              //   aria-controls={mobileMenuId}
              aria-haspopup="true"
              //   onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;
