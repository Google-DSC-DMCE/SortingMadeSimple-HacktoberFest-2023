import React, { useState } from "react";
import "../../css/NavBar.css";
import SlideBar from "./SlideBar";
import { IconButton, Box } from "@mui/material";
import { Menu } from "@material-ui/icons";

function NavBar() {
  const [showSlideBar, setShowSlideBar] = useState(false);

  const handleSlideBarToggle = () => {
    setShowSlideBar(!showSlideBar);
  };

  return (
    <Box
      style={{ zIndex: "99" }}
      padding="0rem 6% 0rem 6%"
      mb="-10px"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        flexDirection: "row", // Center items vertically

        textAlign: "center", // Center text horizontally
      }}
    >
      <h1 style={{ color: "#007fff" }}>Sorting Made Simple</h1>
      {/* <p>Explore and learn various algorithms and data structures.</p> */}
      <Box
        sx={{
          ml: "8.5rem",
          mb: "1rem",
          width: "150px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Your logo */}
      </Box>
      <SlideBar open={showSlideBar} onClose={handleSlideBarToggle} />
      <IconButton color="inherit" onClick={handleSlideBarToggle}>
        <Menu style={{ color: "#007fff" }} fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default NavBar;
