import React, { useState } from "react";
import "./BottomSheet.css";

const BottomSheet = () => {
  const [position, setPosition] = useState("90%");
  const [prevPosition, setPrevPosition] = useState("100%");
  const [animationClass, setAnimationClass] = useState("animation-start");
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseUp = (e) => {
    setIsDragging(false);
    setPosition(`${calculateNearestSnapPoint(e.clientY, window.innerHeight)}%`);
  };

  const calculateNearestSnapPoint = (leavePosition, screenHeight) => {
    let positions = [10, 50, 90];
    let nearestPoint = Math.round((leavePosition / screenHeight) * 100);
    let closest = positions.sort(
      (a, b) => Math.abs(nearestPoint - a) - Math.abs(nearestPoint - b)
    )[0];
    return closest;
  };

  const handleButtonClick = (pos) => {
    if (position === "5%") {
      setPrevPosition("5%");
    } else if (position === "50%") {
      setPrevPosition("50%");
    } else {
      setPrevPosition("90%");
    }
    setPosition(pos);

    setAnimationClass("");
    setTimeout(() => setAnimationClass("animation-start"), 10);
  };

  return (
    <div className={`bottom-sheet ${animationClass}`} style={{ top: position }}>
      <style>
        {`
          @keyframes mymove {
            from {
              top: ${prevPosition};
            }
            to {
              top: ${position};
            }
          }
        `}
      </style>
      <div className="header">
        <button
          onClick={(e) => handleButtonClick("50%")}
          className="position-btn"
        >
          Open Bottom Sheet at Middle
        </button>
        <div className="handle" onMouseLeave={(e) => handleMouseUp(e)}></div>
        <button
          onClick={(e) => handleButtonClick("5%")}
          className="position-btn"
        >
          Open Bottom Sheet at Top
        </button>
      </div>
      <div className="content">
        <h2>Bottom Sheet Content</h2>
        <p>This is the content of the bottom sheet.</p>
      </div>
    </div>
  );
};

export default BottomSheet;
