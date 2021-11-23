import React from "react";
import "./css/header.css";
import googleDriveLogo from "./img/google-drive.png";
import SearchIcon from "@material-ui/icons/Search";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Header({ photoURL }) {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={googleDriveLogo} alt="" />
        <span>Drive</span>
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search in Drive" />
        <FormatAlignCenterIcon />
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <span>
          <AppsIcon />
          <Avatar src={photoURL} />
        </span>
      </div>
    </div>
  );
}

export default Header;
