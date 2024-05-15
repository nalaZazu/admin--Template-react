import { Box, Divider, Grid, Hidden, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { sidebarJson } from "../../constants";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { useNavigate } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#2b2c40" : "#2b2c40",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
  borderRadius: "0px !important",
  height: "100vh",
}));
const SidebarCompoents = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} component="div">
      <Grid container>
        <Hidden mdDown>
          <Grid item>
            <Item>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    paddingTop: "30px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    paddingBottom: "20px",
                  }}
                >
                  Magic Pleading
                </Typography>
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
                    onClick={() => navigate("/")}
                  >
                    <SvgIcon>
                      <EqualizerIcon />
                    </SvgIcon>

                    <Typography sx={{}}>{name}</Typography>
                  </Box>
                );
              })}
            </Item>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
};

export default SidebarCompoents;
