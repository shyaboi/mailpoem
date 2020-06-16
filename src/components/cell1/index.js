import React from "react";
import "./style.css";
import mp from "./mp.mp4";
import ReactPlayer from "react-player";

import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";

export default (props) => {
  return (
    <ReactPlayer
      url="https://youtu.be/RLGqFAS6-eA"
      volume="0"
      muted
      playing
      loop
      width="100%"
      height="100vh"
      id="flyWave"
    />

    //   <video autoPlay muted loop id="flyWave">
    //   <source src={mp} type="video/mp4" />
    // </video>

    //   )
    // }

    // export default Cell1;
  );
};
