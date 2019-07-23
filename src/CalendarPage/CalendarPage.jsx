import React from 'react'
import PropTypes from 'prop-types'
import Calendar from "../Calendar/Calendar";

import sharedStyle from "../Shared.module.css";

const CalendarPage = ({dates}) => {
  return (
    <div>
      <hr/>
      <div>
        <h2 className={sharedStyle.title}>Calendar</h2>
        <Calendar dates={dates}/>
      </div>
    </div>
  )
}

CalendarPage.propTypes = {
  dates: PropTypes.array.isRequired
}

export default CalendarPage
