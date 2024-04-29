import { Box, LinearProgress, colors } from "@mui/material";
import { useState } from "react";
// import "./Card.css"

const PreMonthCardAttPre = () => {
  const [progress, setProgress] = useState(75);

  const progressStyle = {
    height: "10px",
    backgroundColor: "#F15B46",
    width: `${progress}%`,
    borderTopLeftRadius: "50px", 
    borderBottomLeftRadius: "50px",
    transition: "width 0.3s ease-in-out",
  };

  return (
    <Box
      sx={{
        // width: "279px",
        height: "115px",
        background: "#fff",
        padding: "16px 22px",
        borderRadius:"9px",
        border:"1px solid #E2E2E2"
      }}
    >
      <p
        style={{
          width: "134px",
          height: "30px",
          fontWeight: 550,
          fontSize: "30px",
          lineHeight: "30px",
          color: "#F15B46",
        }}
      >
        {progress}%
      </p>
      <p
        style={{
          lineHeight: "18px",
          color: "rgb(0 0 0 / 60%)",
          marginTop: "7px",
        }}
      >
        Last Month's Attendance
      </p>
      <p
        style={{
          display: "flex",
          justifyContent: "flex-end",
          color: "rgb(0 0 0 / 60%)",
        }}
      >
        {progress}%
      </p>
      <div
        style={{
          width: "100%",
          backgroundColor: "#f15b464a",
          borderRadius: "50px",
        }}
      >
        <div style={progressStyle}></div>
      </div>
    </Box>
  );
};

export default PreMonthCardAttPre;
