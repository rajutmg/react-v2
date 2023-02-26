import React from "react";
import Banner from "./minComp/Banner";
import BusinessList from "./business/BusinessList";
import Header from "../header/index";
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <BusinessList />
    </>
  );
};

export default Home;
