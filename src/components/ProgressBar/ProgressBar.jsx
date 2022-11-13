import React from "react";

function ProgressBar(props) {
  const clamp = (min, value, max) => {
    return Math.min(Math.max(min, value), max);
  };

  return (
    <div>
      <div
        style={{
          width: "50%",
          height: "15px",
          margin: "15px auto",
          background: "rgb(34,34,34)",
          borderRadius: "10px",
          boxShadow: "inset 0 0 5px #000",
        }}
      >
        <div
          className="progressColor"
          percentage={clamp(0, props.percentage, 100)}
          style={{
            width: props.percentage,
            height: "15px",
            backgroundColor: "",
            borderRadius: "8px",
            transition: "width 0.3s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
