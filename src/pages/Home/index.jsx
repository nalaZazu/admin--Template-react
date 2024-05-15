import React from "react";
import Main from "../../components/Main";
import UserData from "../User";
// This page call in the router page
const Home = () => {
  return (
    <Main>
      <UserData />
    </Main>
  );
};

export default Home;
