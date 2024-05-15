import React from "react";
import SidebarCompoents from "../sidebarmenu";
import { Box, Grid } from "@mui/material";
import HeaderCompoents from "../Header";
const Main = ({ children }) => {
  // This page calling in the HOme page and call the compoent accordingly
  return (
    <Box compoents="div">
      <Grid container spacing={4}>
        <Grid item sx={{ display: { md: "2" } }}>
          <SidebarCompoents />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <HeaderCompoents />
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
