import React from "react";
import PropTypes from "prop-types";

import style from "../CalendarPage/Calendar.module.css";

const Calendar = ({ dates }) => {
  return (
    <div className={style.calendar}>
      {dates.map((date, index) => {
        return (
          <div key={`${date.date}-${index}`} className={style.calendarItem}>
            <time dateTime={date.date}>{date.date}</time>
            <span className={style.description}>{date.description}</span>
          </div>
        );
      })}
    </div>
  );
};

Calendar.propTypes = {
  dates: PropTypes.array.isRequired
};

export default Calendar;
