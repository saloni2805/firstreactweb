import React from "react";
import web from "../src/images/img2.webp";
import Common from "./Common";

export default function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="./service"
        btname="Get Started"
      />
    </>
  );
}
