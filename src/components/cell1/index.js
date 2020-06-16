import React from 'react';
import './style.css';
import mp from './mp.mp4'
import ReactPlayer from "react-player"

import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';

export default props => {
  return (
<<<<<<< HEAD

    <ReactPlayer url="https://youtu.be/RLGqFAS6-eA" volume = "0" muted playing="true" loop="True" width="100%" height="100vh" controls="true"  id="flyWave" />
=======
    <Player poster="/assets/poster.png">
      <source src={mp} />

      <ControlBar>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
  );
};
// function Cell1() {
//   return (

//     <ReactPlayer loop="true" width="100%" height="100vh" controls="true"  id="flyWave", {url, playing:true} url={[{src: './mp.mp4', type: 'video/mp4'}]}  />
>>>>>>> 45070d715b4f18c720388a88573ffc32dc7025ff

  //   <video autoPlay muted loop id="flyWave">
  //   <source src={mp} type="video/mp4" />
  // </video>

//   )
// }

// export default Cell1;



