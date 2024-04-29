import React from "react";
import "./Notice.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ParticularNotice = ({ data,handleSelectedNotice }) => {
  console.log(data);
  return (
    <div className="ParticularNoticeOuterDiv">
      <p className="noticeAndNamePart">
        <span className="spanDivOfToShowNotice">
          Notice
        </span>
        <span>
          <ArrowForwardIosIcon className="arrowInNoticebetNoandNa"/>
        </span>
        <span className="nameInParticularNotice">
          {data?.name}
        </span>
      </p>
      <h3>New Exam Preparation</h3>
      <div
        style={{ width: "98%", display: "flex", justifyContent: "flex-end" }}
      >
        <button className="backButtonNoticeee" onClick={() => handleSelectedNotice("")}>Back</button>
      </div>
      <div className="divPartOfNoticeTotalDetail1">
        <div>
          <img
            src="https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980043.jpg?t=st=1713988065~exp=1713991665~hmac=f363d0256a45727d05b86a6ab55c2d1754ac2431ca9d989fe38d49398d3e9171&w=1480"
            className="profileImgInNotice"
            alt="Teacher profile"
          />
        </div>
        <div className="divPartOfNoticewithoutpic">
          <div className="headerPartOfNotice">
            <p className="senderInNotice">Mia Miss.</p>
            <p className="noticeSendDate">Monday, 4/10/2024</p>
          </div>
          <p className="noticeSendDate">Teacher,Biology</p>
          <p className="noticeInformation">
            Come to my Office now!! You Have left your assignment come here and
            Come to my Office now!! You Have left your assignment come here and
            Come to my Office now!! You Have left your assignment come here and
            Come to my Office now!! You Have left your assignment come here and
            Come to my Office now!! You Have left your assignment come here and
            Come to my Office now!! You Have left your assignment come here and
            Come to my Office now!! You Have left your assignment come here and
            Come to my Office now!! You Have left your assignment come here and
            Come to my Office now!! You Have left your assignment come here and
            Come to my Office now!! You Have left your assignment come here and
            Come to my Office now!! You Have left your assignment come here and
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParticularNotice;
