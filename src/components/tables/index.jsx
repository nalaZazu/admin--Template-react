import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Button,
  Pagination,
  Typography,
  Box,
  Grid,
} from "@mui/material";

export const UserMyTable = () => {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = [
    {
      id: 1,
      name: "John",
      email: "abc@gmail.com",
      role: "developer",
      status: "on",
    },
    {
      id: 2,
      name: "Jane",
      email: "abc@gmail.com",
      role: "developer",
      status: "on",
    },
    {
      id: 3,
      name: "Bob",
      email: "abc@gmail.com",
      role: "developer",
      status: "on",
    },
    //...
  ];

  return (
   <Box sx={{padding:{sm:'10px' , md:'0'}}}>
       <TableContainer
      style={{
        background: "#2b2c40",
        borderRadius: "10px",
        padding: "10px !important",
       // Default padding
        // "@media (min-width: 600px)": {
        //   padding: "10px !important", // Padding for screen sizes greater than or equal to sm (600px)
        // },
        // "@media (min-width: 960px)": {
        //   padding: "0 !important", // Padding for screen sizes greater than or equal to md (960px)
        // },
      }}
    >
      <Box>
        <Typography sx={{ color: "#fff", padding: "10px" }} variant="h5">
          Users
        </Typography>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            {/* <TableCell padding="checkbox"></TableCell> */}
            <TableCell style={{ color: "#fff"}}>User Name</TableCell>
            <TableCell style={{ color: "#fff" }}>Email</TableCell>
            <TableCell style={{ color: "#fff"}}>Role</TableCell>
            <TableCell style={{ color: "#fff"}}>Status</TableCell>
            <TableCell style={{ color: "#fff"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.id} style={{ color: "#fff" }}>
                {/* <TableCell padding="checkbox"></TableCell> */}
                <TableCell style={{ color: "#fff"}}>{row.name}</TableCell>
                <TableCell style={{ color: "#fff"}}>{row.email}</TableCell>
                <TableCell style={{ color: "#fff"}}>{row.role}</TableCell>
                <TableCell style={{ color: "#fff"}}>{row.status}</TableCell>
                <TableCell style={{ color: "#fff"}}>Edit</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {/* <Box sx={{ padding: "15px", display: "flex", gap: "10px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Next")}
        >
          Next
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Previous")}
        >
          Previous
        </Button>
      </Box> */}
    </TableContainer>
   </Box>
     
  
  
  );
};
