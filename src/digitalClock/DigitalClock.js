import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

function DigitalClock(props) {  
  
  useEffect(() => {
  }, [props.time]);

  return (
    <div className="digital-clock"></div>
  );
}

// class Clock extends React.Component {

//   render() {
//     const now = this.props.time;
//     const seconds = now.getSeconds();
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     const secondHandStyle = { transform: `rotate(${secondsDegrees}deg)` };

//     const mins = now.getMinutes();
//     const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
//     const minsHandStyle = { transform: `rotate(${minsDegrees}deg)` };

//     const hour = now.getHours();
//     const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
//     const hourHandStyle = { transform: `rotate(${hourDegrees}deg)` };

//     return (
//       <div className="clock">
//         <div className="outer-clock-face">
//           <div className="marking marking-zero"></div>
//           <div className="marking marking-one"></div>
//           <div className="marking marking-two"></div>
//           <div className="marking marking-three"></div>
//           <div className="marking marking-four"></div>
//           <div className="marking marking-five"></div>
//           <div className="inner-clock-face">
//             <div className="center-dot"></div>
//             <div className="hand hour-hand" style={hourHandStyle}></div>
//             <div className="hand min-hand" style={minsHandStyle}></div>
//             <div className="hand second-hand" style={secondHandStyle}></div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default DigitalClock;
