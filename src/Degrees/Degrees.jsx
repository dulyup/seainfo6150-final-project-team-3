import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import style from "../DegreesPage/DegreesPage.module.css";

const Degrees = ({degrees}) => {
  return (
    <div className={style.table}>
      <table>
        <thead className={style.tableHeader}>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Level</th>
          <th>Schools</th>
        </tr>
        </thead>
        <tbody>
        {degrees.map((degree, index) => {
          return (
            <tr key={`${degree.slug}`} className={style.row}>
              <td><img src={degree.image} alt={degree.title} className={style.degreeImage}/></td>
              <td>
                <Link to={"/degrees/:" + degree.slug} key={degree.slug} className={style.degreeTitle}>
                  {degree.title}
                </Link>
              </td>
              <td>{degree.level}</td>
              <td>
                <ul className={style.schoolList}>
                  {degree.schools.map((school, index) => (
                    <li>
                      {school.replace(/-/g, ' ')}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

Degrees.propTypes = {
  degrees: PropTypes.array.isRequired
};

export default Degrees;
