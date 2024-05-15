import { Box, Divider, SvgIcon } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { sidebarJson } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
const MenuBar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const toggleclose = () => {
    setOpenSidebar(false);
  };
  const navigate = useNavigate();
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        {/* AppBar with toggle button */}
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSidebar}
            sx={{ mr: 2, ...(openSidebar && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Sidebar Drawer */}
        <Drawer
          anchor="left"
          open={openSidebar}
          onClose={toggleSidebar}
          variant="temporary"
        >
          <Box
            sx={{
              display: "flex",
              paddingTop: "30px",
              paddingLeft: "15px",
              paddingBottom: "20px",
            }}
          >
            <Typography>Magic Pleading</Typography>
            <span onClick={toggleclose} sx={{ width: "10px" }}>
              <CloseIcon />
            </span>
          </Box>

          <Divider />
          {sidebarJson?.map((item, index) => {
            const { name, href } = item;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  padding: "10px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/users")}
              >
                <SvgIcon>
                  <EqualizerIcon />
                </SvgIcon>

                <Typography sx={{}}>{name}</Typography>
              </Box>
            );
          })}
        </Drawer>
      </Box>
    </Box>
  );
};

export default MenuBar;
