// Import useState
import React, { useState } from "react";
import webgazer from "webgazer";

function App() {
  // webgazer.saveDataAcrossSessions(false);
  webgazer.showPredictionPoints(false);
  webgazer.showVideo(false);

  let max = 0;

  webgazer
    .setGazeListener(function (data, elapsedTime) {
      if (data == null) {
        return;
      }
      var xprediction = data.x; //these x coordinates are relative to the viewport
      var yprediction = data.y; //these y coordinates are relative to the viewport

      // print xPrediction to console
      // console.log(xprediction);

      if (xprediction > 100 && xprediction < 1450) {
        setIsLookingAtScreen(true);
      } else {
        setIsLookingAtScreen(false);
      }

      if (xprediction > max) {
        max = xprediction;
      }

      // print isLookingAtScreen to console
      console.log(max);
    })
    .begin();

  function recalibrate() {
    webgazer.clearData();
  }

  const [isLookingAtScreen, setIsLookingAtScreen] = useState(false);

  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: 20 }}>Webcam</h3>
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-primary" onClick={recalibrate}>
          Recalibrate
        </button>

        {/* Print if the person is looking at the screen or not
            Also print in green is he is looking, red is he is not */}
        <h3 style={{ color: isLookingAtScreen ? "green" : "red" }}>
          {isLookingAtScreen ? "Looking at screen" : "Not looking at screen"}
        </h3>
      </div>
    </>
  );
}

export default App;
