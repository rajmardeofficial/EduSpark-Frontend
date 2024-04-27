import { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const AttenIncreaseCard = () => {
    const [progress, setProgress] = useState(10);

  return (
    <div
      style={{
        // width: "279px",
        height: "100px",
        background: "#fff",
        padding: "16px 22px",
        borderRadius:"9px",
        border:"1px solid #E2E2E2"
      }}
    >
      <div style={{display:"flex",flexDirection:"row",color: "#008F39"}}>
        <span style={{lineHeight:"40px",fontWeight:"550",fontSize:"75px"}}><ArrowDropUpIcon style={{fontSize:"40px"}}/></span>
      <p
        style={{
          width: "134px",
          height: "40px",
          fontWeight: 550,
          fontSize: "33px",
          lineHeight: "40px",
          color: "#008F39",
        }}
      >
        {progress}%
      </p>
      </div>
      <p
        style={{
          lineHeight: "22px",
          color: "rgb(0 0 0 / 60%)",
          marginTop: "3px",
        }}
      >
        Attendance increased by
      </p>
    </div>
  )
}

export default AttenIncreaseCard
