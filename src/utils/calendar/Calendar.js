import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import "./Calendar.css";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getattendanceofparticularmonth } from "../../store/studentrelated/StudentHandle";

// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.includes(props.day.date());

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      // badgeContent={isSelected ? '' : undefined} // Uncomment for moon icon
      className={
        isSelected
          ? "css-1u23akw-MuiButtonBase-root-MuiPickersDay-root highlighted changeColor"
          : ""
      }
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

const Calendar = () => {
  const {currentUser} = useSelector((state) => state.role);
  const { listOfAllSubject,listOfCurrentMonthAttendance, } = useSelector((state) => state.student);
  const [isLoading, setIsLoading] = useState(false);
  const [subjectId, setSubjectId] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
  const [selectedOption, setSelectedOption] = useState("");
  const [highlightedDays, setHighlightedDays] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
    setSubjectId(event.target.value);
  };

  const handleMonthChange = (newDate) => {
    setSelectedDate(newDate);
    
  };
  const handleDateChange = (newDate) => {
    console.log(newDate);
    setSelectedDate(newDate);
  };

  useEffect(() => {
    if (selectedDate) {
      if((subjectId === "" || subjectId === undefined) && currentUser?.roleType !== "School"){
        return;
      }else{
        const monthNumber = selectedDate.month();
        const year = selectedDate.year();
        const currentMonth = dayjs().month(monthNumber).format("MMMM");
        console.log(currentMonth,year);
        const roleType = currentUser?.roleType;
        const fields = {roleType,subjectId, currentMonth, year};
        console.log(fields);
        dispatch(getattendanceofparticularmonth(fields,currentUser));
      }
    }
  },[selectedDate,subjectId])

  useEffect(() => {
    const attendanceDates = listOfCurrentMonthAttendance.flatMap(item =>
      item.attendance
        .filter(record => record.isPresent)
        .map(record => record.date)
    );
    console.log(attendanceDates);
    
    console.log(attendanceDates);
    const days = attendanceDates?.map(dateString => {
      const date = new Date(dateString);
      return date?.getDate();
    });
    setHighlightedDays(days);
  },[listOfCurrentMonthAttendance]);
  
  console.log(listOfAllSubject);
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          maxHeight: "523px",
          width: "100%",
          borderRadius: "9px",
        }}
      >
       {currentUser?.roleType !== "School" && <div className="selectSubjectDiv">
          <select
            value={selectedOption}
            onChange={handleChange}
            className="selectSubjectOfCalendar"
          >
            <option value="">Select Subject</option>
            {listOfAllSubject &&
              listOfAllSubject?.map((subject, index) => {
                return (
                  <option value={subject?._id} key={index}>
                    {subject?.name}
                  </option>
                );
              })}
          </select>
        </div>}{" "}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            value={selectedDate}
            loading={isLoading}
            onChange={handleDateChange}
            onMonthChange={handleMonthChange}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: ServerDay,
            }}
            slotProps={{
              day: {
                highlightedDays,
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default Calendar;
