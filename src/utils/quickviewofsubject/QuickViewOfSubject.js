import React, { useEffect, useState } from "react";
import "./QuickView.css";
import { useSelector } from "react-redux";
import { countsUniqueSubjectAttData,AttendancePer } from "../AttendancePer";

const QuickViewOfSubject = () => {
  const {listOfAllSubject,listOfAllAttendanceOfStudent} = useSelector((state) => state.student);
  const [subjectData, setSubjectData] = useState([]);

  useEffect(() => {
    const Data = countsUniqueSubjectAttData(listOfAllAttendanceOfStudent,listOfAllSubject);
    setSubjectData(Data);
  },[listOfAllAttendanceOfStudent,listOfAllSubject]);
  console.log(listOfAllAttendanceOfStudent,listOfAllSubject);

  const colors = [
    "#008F39","#92BE13","#F2E146","#ED9C51","#D30B0B",
    "black","#FF5733","#FFBD33","#339CFF","#33FF69",
    "#6C33FF","#FF0000","#00FF00","#0000FF","#FFFF00",
  ];

  const colorCount = Math.min(subjectData?.length, colors?.length);

    return (
    <div className="quickViewOuterCard">
      <div className="quickViewTextDiv">
        <p style={{ fontWeight: "700", fontSize: "18px", lineHeight: "25px" }}>
          Quick View
        </p>
      </div>
      <div className="subjectContainers">
        {subjectData?.length > 0 &&
          subjectData?.map((subject, index) => {
            const progressStyle = {
              height: "10px",
              backgroundColor: colors[index % colorCount],
              width: `${AttendancePer(subject?.isPresentT+subject?.isPresentF,subject?.isPresentT)}%`,
              borderRadius: "50px",
              transition: "width 0.3s ease-in-out",
            };
            return (
              <div key={index}>
                <p className="nameAndPercentageDiv">
                  <span className="subjectNameSpan">{subject?.name}</span> |{" "}
                  <span className="subjectPercentageInGreen">
                  {AttendancePer(subject?.isPresentT+subject?.isPresentF,subject?.isPresentT)}%
                  </span>
                </p>
                <p className="flexEndPercentage">{AttendancePer(subject?.isPresentT+subject?.isPresentF,subject?.isPresentT)} %</p>
                <div className="progressStyleDivInQuickView">
                  <div style={progressStyle}></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default QuickViewOfSubject;
