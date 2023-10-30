import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Landingparts from "../components/Landingparts";
import Card from "../components/Card";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Upcoming from "./Upcoming";

function StudentHome() {
  const currentUser = useSelector((state) => state.data.user);

  console.log(currentUser?.user?.email);

  return (
    <>
      <Navbar user={currentUser?.user} type={currentUser?.type} />
      <Landing user={currentUser?.user} type={currentUser?.type} />
      <Landingparts title="What you Need" card="1" />
      <Landingparts title="How to Prepare" card="2" />
      <Landingparts title="Avoid the Following" card="3" />
      <Upcoming />
      {/* <Footer /> */}
    </>
  );
}

export default StudentHome;
