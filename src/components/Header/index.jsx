import { Box, Grid, Hidden } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MenuBar from "../menubar";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#2b2c40" : "#2b2c40",
  ...theme.typography.body2,
  padding: "13px 15px 13px 15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "25px",
  borderRadius: "0px !important",
}));
const HeaderCompoents = () => {
  return (
    <Box>
      <Box sx={{ boxShadow: 3 }}>
        <Grid>
          <Item>
            <Hidden mdUp>
              <MenuBar />
            </Hidden>
            <Box></Box>
            <Box>
              <img
                src="https://static.vecteezy.com/system/resources/previews/004/773/704/non_2x/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg"
                alt="image"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            </Box>
          </Item>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeaderCompoents;
