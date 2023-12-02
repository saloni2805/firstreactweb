import React from "react";
import web from "../src/images/img2.webp";
import Common from "./Common";

export default function About() {
  return (
    <>
   <Common name=" Welcome to About Page"
    imgsrc={web}
    visit="./contact"
    btname="Contact Now"
   />
    </>
  );
}
