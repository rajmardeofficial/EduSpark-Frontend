import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useParams } from "react-router-dom";

const ParticularSubjectNotes = () => {
  const subject = useParams().subject;

  const notes = [
    {
      heading: "Physics Notes",
      description:
        "The notes is from chapter 1 to chapter 5. You will love this content.",
      date: "1 March, 2024",
    },
    {
      heading: "Computer Science Notes",
      description:
        "The notes is from chapter 1 to chapter 5. You will love this content.",
      date: "1 March, 2024",
    },
    {
      heading: "BlockChain Notes",
      description:
        "The notes is from chapter 1 to chapter 5. You will love this content.",
      date: "1 March, 2024",
    },
    {
      heading: "AI Notes",
      description:
        "The notes is from chapter 1 to chapter 5. You will love this content.",
      date: "1 March, 2024",
    },
  ];
  return (
    <div className="studentComponent">
      <div className="navHeaderForTeaAndStd">
        <h1>Access Notes</h1>
      </div>
      <div className="particularSubjectNotes">
        <p className="noticeAndNamePart">
          <span className="spanDivOfToShowNotes">Access Notes</span>
          <span>
            <ArrowForwardIosIcon className="arrowInNoticebetNoandNa" />
          </span>
          <span className="nameInParticularNotice">{subject}</span>
        </p>
        <p className="subjName">{subject}</p>
        <p className="recentlyAddedNotes">Recently Added</p>
        <div className="notesOuterDiv">
          <div>
            <img
              className="imgOfNotes"
              src="https://cdn.pixabay.com/photo/2020/03/10/17/02/pdf-4919559_640.png"
              alt="pdf"
            />
          </div>
          <div className="contentOfNotes">
            <p className="notesheading">Physics notes for end sem exam</p>
            <p className="notesDescription">
              The notes is from chapter 1 to chapter 5. You will love this
              content.
            </p>
            <p className="dateOfEveryNotesInParticularSN">1 March, 2024</p>
          </div>
        </div>
        <p className="recentlyAddedNotes">Total Notes</p>
        <div className="totalnotesOuterDiv">
        {notes &&
          notes?.map((note, index) => {
            return (
              <div className="notesOuterDiv1" key={index}>
                <div>
                  <img
                    className="imgOfNotes"
                    src="https://cdn.pixabay.com/photo/2020/03/10/17/02/pdf-4919559_640.png"
                    alt="pdf"
                  />
                </div>
                <div className="contentOfNotes">
                  <p className="notesheading">Physics notes for end sem exam</p>
                  <p className="notesDescription">
                    The notes is from chapter 1 to chapter 5. You will love this
                    content.
                  </p>
                  <p className="dateOfEveryNotesInParticularSN">
                    1 March, 2024
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ParticularSubjectNotes;
