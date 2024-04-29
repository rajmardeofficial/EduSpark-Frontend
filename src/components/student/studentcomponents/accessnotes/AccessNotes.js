import React, { useState } from "react";
import "./AccessNotes.css"
import ParticularSubjectNotes from "./components/ParticularSubjectNotes";
import { Link } from "react-router-dom";

const AccessNotes = () => {

  const Subjects = [
    "Web Development",
    "Blockchain",
    "Data Analyst",
    "AI",
    "Ethereum Course",
  ];


  return (
    <div className="studentComponent">
      <div className="navHeaderForTeaAndStd">
        <h1>Access Notes</h1>
      </div>
      <div className="subjectsInNotes">
        {Subjects?.map((subject, index) => {
          return (
            <Link to={`/particularSubjectNotes/${subject}`} key={index} className = "subjectInNote link">
              {subject}
            </Link>
          );
        })}
      </div> 
    </div>
  );
};

export default AccessNotes;
