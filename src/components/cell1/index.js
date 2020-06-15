import React from 'react';
import './style.css';
import mp from './mp.mp4'
import ReactPlayer from "react-player"


function Cell1() {
  return (

    <ReactPlayer url="https://youtu.be/RLGqFAS6-eA" playing="true" loop="true" width="100%" height="100vh" controls="true"  id="flyWave" />

  //   <video autoPlay muted loop id="flyWave">
  //   <source src={mp} type="video/mp4" />
  // </video>

  )
}

export default Cell1;



