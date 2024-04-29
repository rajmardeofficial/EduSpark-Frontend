import React from "react";
import Calendar from "../../../../utils/calendar/Calendar";
import MonthCardAttPer from "../../../../utils/card/MonthCardAttPer";
import OverAllAttenCardPer from "../../../../utils/card/OverAllAttenCardPer";
import PreMonthCardAttPre from "../../../../utils/card/PreMonthCardAttPre";
import AttenIncreaseCard from "../../../../utils/card/AttenIncreaseCard";
import QuickViewOfSubject from "../../../../utils/quickviewofsubject/QuickViewOfSubject";
import ColumnChart from "../../../../utils/columnchart/ColumnChart";

const Attendance = () => {
  return (
    <>
      <div className="studentComponent">
        <div className="navHeaderForTeaAndStd">
          <h1>Attendance</h1>
        </div>
        <div style={{ marginLeft:"9px",width:"calc(100% - 9px)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              gap: "2%",
            }}
          >
            <div style={{width:"44%"}}>
              <Calendar />
            </div>
            <div
              style={{ display: "flex", gap: "15px", flexDirection: "column",width:"25%" }}
            >
              <div>
                <OverAllAttenCardPer />
              </div>
              <div>
                <MonthCardAttPer />
              </div>
              <div>
                <PreMonthCardAttPre />
              </div>
              <div>
                <AttenIncreaseCard />
              </div>
            </div>
            <div style={{ display: "flex",width:"25%" }}>
              <QuickViewOfSubject />
            </div>
          </div>
        </div>
        <div>
          <ColumnChart/>
        </div>
      </div>
    </>
  );
};
export default Attendance;
