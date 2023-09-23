import { useState, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runFacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: {
        width: 640,
        height: 480,
      },
      scale: 0.8,
    });
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    console.log(webcamRef.current);
    if (
      typeof webcamRef.current !== "undefined" &&
      typeof webcamRef.current !== null &&
      typeof webcamRef.current.video.readyState === 4
    ) {
      // Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set Webcam dimensions
      webcamRef.current.video.videoWidth = videoWidth;
      webcamRef.current.video.videoHeight = videoHeight;

      // Set canvas dimensions
      canvasRef.current.Width = videoWidth;
      canvasRef.current.Height = videoHeight;

      // Detections
      const face = await net.estimateFaces(video);
      console.log(face);
    }
  };

  runFacemesh();

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
