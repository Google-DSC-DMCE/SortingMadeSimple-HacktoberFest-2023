import React, { useState } from "react";
import Logo from "./Logo";
import "../../css/NavBar.css";
import SlideBar from "./SlideBar";
import { Link, NavLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Box } from "@mui/material";
import SortingMadeSimpleLogo from '../../images/sorting-made-simple-logo.png'

function NavBar() {
  const [showSlideBar, setShowSlideBar] = useState(false);

  const handleSlideBarToggle = () => {
    setShowSlideBar(!showSlideBar);
  };

  return (
    <Box style={{ zIndex: "99" }} padding="0rem 6% 0rem 6%" mb="-10px" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vw' }}>
      <Box sx={{ ml: '8.5rem', mb: '1rem', width: "150px", height: '100px', display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={SortingMadeSimpleLogo} alt="" style={{ maxWidth: 'auto', height: '100%', objectFit: 'cover' }} />
      </Box>


      <IconButton onClick={handleSlideBarToggle}>
        <SlideBar open={showSlideBar} onClose={handleSlideBarToggle} />
        <Menu fontSize="large" />
      </IconButton>

    </Box>
  );
}

export default NavBar;
