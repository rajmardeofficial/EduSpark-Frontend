import React, { useEffect, useState } from "react";
import Calendar from "../../../../utils/calendar/Calendar";
import MonthCardAttPer from "../../../../utils/card/MonthCardAttPer";
import OverAllAttenCardPer from "../../../../utils/card/OverAllAttenCardPer";
import PreMonthCardAttPre from "../../../../utils/card/PreMonthCardAttPre";
import AttenIncreaseCard from "../../../../utils/card/AttenIncreaseCard";
import QuickViewOfSubject from "../../../../utils/quickviewofsubject/QuickViewOfSubject";
import ColumnChart from "../../../../utils/columnchart/ColumnChart";
import { getAllAttendanceOfStudent } from "../../../../store/studentrelated/StudentHandle";
import { useDispatch, useSelector } from "react-redux";
import { AttendancePer } from "../../../../utils/AttendancePer";

const Attendance = () => {
  const { currentUser } = useSelector((state) => state.role);
  const { listOfAllAttendanceOfStudent } = useSelector(
    (state) => state.student
  );
  const [currMonPreAtt,setCurrMonPreAtt] = useState(0);
  const [preMonPreAtt,setPreMonPreAtt] = useState(0);
  const [differenceInPerc,setDifferenceInperc] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const roleType = currentUser?.roleType;
    const fields = { roleType };
    dispatch(getAllAttendanceOfStudent(fields, currentUser));
  }, []);

  useEffect(() => {
    const currentDate = new Date();

    // Get the first day of the current month
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    // Get the first day of the previous month
    const firstDayOfPreviousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );

    // Filter the attendance data for the current month
    const currentMonthAttendance = listOfAllAttendanceOfStudent.filter((record) => {
      const recordDate = new Date(record.date);
      return recordDate >= firstDayOfMonth && recordDate <= currentDate;
    });

    // Filter the attendance data for the previous month
    const previousMonthAttendance = listOfAllAttendanceOfStudent.filter((record) => {
      const recordDate = new Date(record.date);
      return (
        recordDate >= firstDayOfPreviousMonth && recordDate < firstDayOfMonth
      );
    });

    const currentMonthAttendancePre = currentMonthAttendance?.filter((attend) => {
      return attend.isPresent === true;
    })
    const previousMonthAttendancePre = previousMonthAttendance?.filter((attend) => {
      return attend.isPresent === true;
    })
    const currentMonthAttPre = AttendancePer(currentMonthAttendance?.length,currentMonthAttendancePre?.length)
    const previousMonthAttPre = AttendancePer(previousMonthAttendance?.length,previousMonthAttendancePre?.length)
    const differenceInPer = currentMonthAttPre - previousMonthAttPre;
    setCurrMonPreAtt(currentMonthAttPre);
    setPreMonPreAtt(previousMonthAttPre);
    setDifferenceInperc(differenceInPer);
    console.log(currentMonthAttPre,previousMonthAttPre,differenceInPer);
    
  }, [listOfAllAttendanceOfStudent]);

  // console.log(listOfPreviousMonthAttendance,listOfAllAttendanceOfStudent);
  return (
    <>
      <div className="studentComponent">
        <div className="navHeaderForTeaAndStd">
          <h1>Attendance</h1>
        </div>
        <div style={{ marginLeft: "9px", width: "calc(100% - 9px)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              gap: "2%",
            }}
          >
            <div style={{ width: "44%" }}>
              <Calendar />
            </div>
            <div
              style={{
                display: "flex",
                gap: "15px",
                flexDirection: "column",
                width: "25%",
              }}
            >
              <div>
                <OverAllAttenCardPer
                  listOfAllAttendanceOfStudent={listOfAllAttendanceOfStudent}
                />
              </div>
              <div>
                <MonthCardAttPer currMonPreAtt = {currMonPreAtt} />
              </div>
              <div>
                <PreMonthCardAttPre preMonPreAtt = {preMonPreAtt}/>
              </div>
              <div>
                <AttenIncreaseCard differenceInPerc = {differenceInPerc}/>
              </div>
            </div>
            <div style={{ display: "flex", width: "25%" }}>
              <QuickViewOfSubject />
            </div>
          </div>
        </div>
        <div>
          <ColumnChart />
        </div>
      </div>
    </>
  );
};
export default Attendance;
