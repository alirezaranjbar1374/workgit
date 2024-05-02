import React from 'react'
import animationData from '../../components/lotties/99063-learn-illustration-cantileverlabs.json'
import Lottie from 'react-lottie';
import { Box } from '@material-ui/core';
import './lotiff.css'
export default function Lotifii() {

    const defaultOptions = {
        loop: true,

        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div style={{margin:10,border:"1 px solid black"}}>
 <Box className='lotifibig'>
 <Lottie 
            isPaused={false}
            isClickToPauseDisabled
     options={defaultOptions}
        height={800}
        width={800}
        
      />
 </Box>
 <Box className='lotifismall'>
 <Lottie 
            isPaused={false}
            isClickToPauseDisabled
     options={defaultOptions}
        // height={800}
        // width={800}
        
      />
 </Box>
    </div>
  )
}