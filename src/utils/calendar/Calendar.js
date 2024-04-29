import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import "./Calendar.css";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

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
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
  const [selectedOption, setSelectedOption] = useState("");
  const highlightedDays = [2, 3, 4, 6, 10, 11,15,16,17,18];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  const fetchHighlightedDays = async (date) => {
    setIsLoading(false);
  };

  const handleMonthChange = (newDate) => {
    console.log(newDate);
    setSelectedDate(newDate);
    fetchHighlightedDays(newDate);
  };
  const handleDateChange = (newDate) => {
    console.log(newDate);
    setSelectedDate(newDate);
    fetchHighlightedDays(newDate);
  };

  return (
    <>
      <div style={{ backgroundColor: "#fff",maxHeight:"523px",width:"100%",borderRadius:"9px" }}>
        <div className="selectSubjectDiv">
          <select value={selectedOption} onChange={handleChange} className="selectSubjectOfCalendar">
            <option value="">Select Subject</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            {/* Add more options as needed */}
          </select>
        </div>{" "}
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
