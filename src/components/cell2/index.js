import React from "react";
import ReactPlayer from "react-player";
import "./style.css";

function Cell2() {
  return (
    <ReactPlayer
      url="https://youtu.be/bSuNMVnmEIo"
      muted
      playing
      loop
      width="100%"
      height="100vh"
      id="ember"
    />
  );
}

export default Cell2;

// <source src="" type="video/mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
