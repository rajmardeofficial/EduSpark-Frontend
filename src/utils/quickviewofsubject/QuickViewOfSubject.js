import React from "react";
import "./QuickView.css";

const QuickViewOfSubject = () => {
  const subjectData = [
    { name: "Mathematics", percentage: "85" },
    { name: "Software Engineering", percentage: "75" },
    { name: "Architecture", percentage: "60" },
    { name: "Mechanical", percentage: "68" },
    { name: "Physics", percentage: "78" },
    { name: "Human Value", percentage: "30" },
  ];

  const colors = [
    "#008F39","#92BE13","#F2E146","#ED9C51","#D30B0B",
    "black","#FF5733","#FFBD33","#339CFF","#33FF69",
    "#6C33FF","#FF0000","#00FF00","#0000FF","#FFFF00",
  ];

  const colorCount = Math.min(subjectData.length, colors?.length);
  return (
    <div className="quickViewOuterCard">
      <div className="quickViewTextDiv">
        <p style={{ fontWeight: "700", fontSize: "18px", lineHeight: "25px" }}>
          Quick View
        </p>
      </div>
      <div className="subjectContainers">
        {subjectData &&
          subjectData?.map((subject, index) => {
            const progressStyle = {
              height: "10px",
              backgroundColor: colors[index % colorCount],
              width: `${subject.percentage}%`,
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              transition: "width 0.3s ease-in-out",
            };
            return (
              <div key={index}>
                <p className="nameAndPercentageDiv">
                  <span className="subjectNameSpan">{subject?.name}</span> |{" "}
                  <span className="subjectPercentageInGreen">
                    {subject?.percentage}%
                  </span>
                </p>
                <p className="flexEndPercentage">{subject?.percentage}%</p>
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
