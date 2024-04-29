import React, { useState } from "react";
import { Box, LinearProgress } from "@mui/material";

const OverAllAttenCardPer = () => {
  const [progress, setProgress] = useState(80);

  return (
    <Box
      sx={{
        // width: "279px",
        height: "130px",
        background: "#fff",
        padding: "18px 22px",
        borderRadius:"9px",
        border:"1px solid #E2E2E2"
      }}
    >
      <p
        style={{
          width: "134px",
          height: "40px",
          fontWeight: 600,
          fontSize: "33px",
          lineHeight: "40px",
          color: "#008F39",
        }}
      >
        {progress}%
      </p>
      <p
        style={{
          lineHeight: "22px",
          color: "rgb(0 0 0 / 60%)",
          marginTop: "7px",
        }}
      >
        Overall Attendance
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
      <LinearProgress
        variant="determinate"
        color="success"
        value={progress}
        sx={{ height: "10px", borderRadius: "50px",color:"green" }}
      />{" "}
    </Box>
  );
};

export default OverAllAttenCardPer;
