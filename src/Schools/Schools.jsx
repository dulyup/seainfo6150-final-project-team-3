import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import style from "../SchoolsPage/SchoolsPage.module.css";

const Schools = ({ degrees, schools }) => {
  let cnt = 0;
  return (
    <div className={style.schoolGrid}>
      {schools.map((school, index) => {
        // thisSchoolsDegrees is an array of all the
        // degrees offered by the school currently being
        // iterated over
        const thisSchoolsDegrees = degrees.filter(degree =>
          degree.schools.includes(school.slug)
        );
        cnt++;
        return (
          <div key={`${school.slug}`}>
            <img src={`images/students${cnt}.jpg`} alt={"school"} className={style.schoolImg}/>
            <p className={style.schoolName}>{school.name}</p>
            <p>{school.short_summary}</p>
            <div>
              <ul className={style.degreeList}>
                {thisSchoolsDegrees.map((degree, index) => (
                  <li key={index}>
                    <Link to={`/degree/${degree.slug}`} key={degree.slug}>
                      {degree.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Schools.propTypes = {
  degrees: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired
};

export default Schools;
