import React, { useState } from 'react';
import { LinearProgress, Box } from '@mui/material';

const MonthCardAttPer = () => {
    const [progress, setProgress] = useState(85);
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
          color: "#2D60FF",
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
        This Month's Attendance
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
        value={progress}
        sx={{ height: "10px", borderRadius: "50px" }}
        className=''
      />{" "}
    </Box>
  )
}

export default MonthCardAttPer
