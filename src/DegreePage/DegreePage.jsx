import React from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";

import DegreePageStyle from"./DegreePage.module.css";
const DegreePage = ({ degree, schools }) => {
  // thisDegreesSchools is an array of all the
  // schools offering the degree currently being viewed
  const thisDegreesSchools = schools.filter(school =>
    degree.schools.includes(school.slug)
  );

  return (
    <div>
      <hr/>
      <div className={DegreePageStyle.container}>
        <div className={DegreePageStyle.firstRow}>
          <div className={DegreePageStyle.image} >
            <img src={degree.image} alt={degree.title} />
          </div>
          <div className={DegreePageStyle.Descriptions}>
            <h2 className={DegreePageStyle.DegreeTitle}>{degree.title}</h2>
            <p className={DegreePageStyle.Summary}>{degree.short_summary}</p>
            <Link to={`/enroll/${degree.slug}`} className={DegreePageStyle.enrollLink}> Enroll</Link>
          </div>
        </div>

        <div className={DegreePageStyle.secondRow}>
          <label className={DegreePageStyle.level}>Level</label>
          <label className={DegreePageStyle.level}>Schools</label>
          <label className={DegreePageStyle.level}>Syllabus</label>
        </div>

        <form className={DegreePageStyle.thirdRow}>
          <div className={changeColor(degree.level)}>{degree.level}</div>
          <ul className={DegreePageStyle.schools} >
            {thisDegreesSchools.map((school, index) => (
              <li key={index}>{school.name}</li>
            ))}
          </ul>
          <a className={DegreePageStyle.syllabus} href={degree.syllabus_pdf_urls}> Syllabus</a>
        </form>
        {/* You should link from here to the enroll page */}
      </div>
    </div>
  );
};

function changeColor(level) {
  switch (level) {
    case "Beginner": 
      return DegreePageStyle.green;
    case "Intermediate":
      return DegreePageStyle.blue;
    case "Advanced":
      return DegreePageStyle.red;
    case "Mastery":
      return DegreePageStyle.purple;
    default:
      return DegreePageStyle.black;
  } 
}

DegreePage.propTypes = {
  degree: PropTypes.object.isRequired
};

export default DegreePage;
