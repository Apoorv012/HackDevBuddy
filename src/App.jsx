import { useState, useRef } from "react";
import Webcam from "react-webcam";
import webgazer from "webgazer";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  webgazer.saveDataAcrossSessions(false);

  webgazer
    .setGazeListener(function (data, elapsedTime) {
      if (data == null) {
        return;
      }
      var xprediction = data.x; //these x coordinates are relative to the viewport
      var yprediction = data.y; //these y coordinates are relative to the viewport
      console.log(data.x, data.y); //elapsed time is based on time since begin was called
    })
    .begin();

  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: 20 }}>Webcam</h3>
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          width: 640,
          height: 480,
          zIndex: 10,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          width: 640,
          height: 480,
          zIndex: 11,
        }}
      />
    </>
  );
}

export default App;
