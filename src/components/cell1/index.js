import React from "react";
import "./style.css";
import mp from "./mp.mp4";
import ReactPlayer from "react-player";


function Cell1() {
  return (
    <ReactPlayer
      url="https://youtu.be/RLGqFAS6-eA"
      muted
      playing
      loop
      width="100%"
      height="100vh"
      id="ember"
    />
  );
}

    export default Cell1;
