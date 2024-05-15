import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { menuButton } from "../../constants";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { UserMyTable } from "../../components/tables";

const UserData = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };
  return (
    <Box>
      <Box sx={{ padding: "20px", paddingLeft: { sm: "25px", md: "0" } }}>
        <Typography variant="h5" sx={{ color: "#fff" }}>
          Account Setting / <span sx={{ color: "#fff" }}>Users</span>
        </Typography>
      </Box>
      <Box>
        {" "}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "10px",
            flexWrap: "wrap",
            padding: "0",
          }}
        >
          {menuButton?.map((list, index) => {
            const {title } = list;
            return (
              <li key={index}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: selectedButton === index ? "#002379" : "#fff",
                    background: selectedButton === index ? "#fff" : "#686dfc",
                    padding: "10px",
                    borderRadius: "3px",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => handleButtonClick(index)}
                >
                  <span>
                    <PersonOutlineIcon />
                  </span>
                  <span>{title}</span>
                </li>
              </li>
            );
          })}
        </ul>
      </Box>
      <UserMyTable />
    </Box>
  );
};

export default UserData;
