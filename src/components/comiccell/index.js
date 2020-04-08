import React from 'react';
import './style.css';
import mp from './mp.mp4'

function video() {
  return (
    <video autoPlay muted loop id="bg"   style={{
      position: "fixed",
      left: 0,
      top: 0
      
    }}>
    <source src={mp} type="video/mp4" />
  </video>
  )
}

export default video;



