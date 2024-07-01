import React, { useEffect, useState } from "react";
import "./Notice.css";
import ParticularNotice from "./ParticularNotice";
import { useDispatch, useSelector } from "react-redux";
import { getNotice } from "../../../../store/studentrelated/StudentHandle";

const Notice = () => {
  const { currentUser } = useSelector((state) => state.role);
  const { noticesListOfStudent } = useSelector((state) => state.student);
  const [selectedAuthority, setSelectedAuthority] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState("");
  const dispatch = useDispatch();
  const authority = ["All", "Teacher", "Admin", "Clark"];

  const notices = [
    {
      name: "Mia",
      heading:
        "You can be any one Doctor, Plumber or a Scientist just have a faith on yourself.",
      profile:
        "https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980043.jpg?t=st=1713988065~exp=1713991665~hmac=f363d0256a45727d05b86a6ab55c2d1754ac2431ca9d989fe38d49398d3e9171&w=1480",
      date: "Monday, 4/10/2024",
    },
    {
      name: "Johny",
      heading:
        "You can be any one Doctor, Plumber or a Scientist just have a faith on yourself.",
    },
    {
      name: "Sunny",
      heading:
        "You can be any one Doctor, Plumber or a Scientist just have a faith on yourself.",
    },
    {
      name: "Johny",
      heading:
        "You can be any one Doctor, Plumber or a Scientist just have a faith on yourself.",
    },
  ];

  const handleSelectedNotice = (notice) => {
    console.log(notice);
    setSelectedNotice(notice);
  };

  useEffect(() => {
    const fields = {
      selectedAuthority,
      institute: currentUser?.institute,
      roleType: currentUser?.roleType,
    };
    dispatch(getNotice(fields, currentUser));
  }, [selectedAuthority]);

  console.log(noticesListOfStudent);
  let transformedNotices = [];
  if (noticesListOfStudent?.length > 0) {
    noticesListOfStudent?.forEach((user) => {
      user?.notice?.forEach((notice) => {
        let newNotice = { ...notice, firstName: user?.firstName };
        transformedNotices.push(newNotice);
      });
    });
    // Sort notices by date in descending order (latest first)
    transformedNotices.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  console.log(transformedNotices);

  return (
    <div className="studentComponent">
      <div className="navHeaderForTeaAndStd">
        <h2>Notice</h2>
      </div>
      <div className="noticeComponentDiv">
        <div
          className="selectAuthority"
          style={{ height: "60vh", width: "100%" }}
        >
          <h2 style={{ marginTop: "15px", marginBottom: "30px" }}>Authority</h2>
          <div>
            {authority?.map((authName, index) => {
              return (
                <div key={index} className="authorityList">
                  <div
                    className={
                      selectedAuthority === authName
                        ? "authorityNameColor"
                        : "authorityName"
                    }
                    onClick={() => setSelectedAuthority(authName)}
                  >
                    <p className="authNamePtag">{authName}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {transformedNotices?.length > 0 && (
          <div>
            {!selectedNotice ? (
              <div className="onlyNoticeOuterDiv">
                <div className="latestNoticeDiv">
                  <h2 style={{ marginBottom: "28px" }}>Latest Notification</h2>
                  <div
                    className="divPartOfNoticeTotalDetail"
                    onClick={() => handleSelectedNotice(transformedNotices[0])}
                  >
                    <div>
                      <img
                        src="https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980043.jpg?t=st=1713988065~exp=1713991665~hmac=f363d0256a45727d05b86a6ab55c2d1754ac2431ca9d989fe38d49398d3e9171&w=1480"
                        className="profileImgInNotice"
                        alt="Teacher profile"
                      />
                    </div>
                    <div className="divPartOfNoticewithoutpic">
                      <div className="headerPartOfNotice">
                        <p className="senderInNotice">
                          {transformedNotices[0].firstName}
                        </p>
                        <p className="noticeSendDate">
                          {new Date(transformedNotices[0].date).toLocaleString(
                            "en-US",
                            {
                              weekday: "long",
                              month: "numeric",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                      <p className="noticeSendDate">
                        {transformedNotices[0].title}
                      </p>
                      <p className="noticeInformation">
                        {transformedNotices[0].content}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <hr style={{ margin: "16px 0" }} />
                <div className="lastWeekOuterDiv">
                  <h2 style={{ marginBottom: "28px" }}>Others</h2>
                  {transformedNotices &&
                    transformedNotices?.slice(1)?.map((notice, index) => {
                      return (
                        <div
                          className="divPartOfNoticeTotalDetail"
                          style={{ marginBottom: "40px" }}
                          key={index}
                          onClick={() => handleSelectedNotice(notice)}
                        >
                          <div>
                            <img
                              src="https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980043.jpg?t=st=1713988065~exp=1713991665~hmac=f363d0256a45727d05b86a6ab55c2d1754ac2431ca9d989fe38d49398d3e9171&w=1480"
                              className="profileImgInNotice"
                              alt="Teacher profile"
                            />
                          </div>
                          <div className="divPartOfNoticewithoutpic">
                            <div className="headerPartOfNotice">
                              <p className="senderInNotice">
                                {notice?.firstName}
                              </p>
                              <p className="noticeSendDate">
                                {new Date(
                                  notice?.date
                                ).toLocaleString("en-US", {
                                  weekday: "long",
                                  month: "numeric",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <p className="noticeSendDate" style={{width:"70%"}}>{notice?.title}</p>
                            <p className="noticeInformation">
                              {notice?.content}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              <div>
                <ParticularNotice
                  data={selectedNotice}
                  handleSelectedNotice={handleSelectedNotice}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;
