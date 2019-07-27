import React from "react";
import PropTypes from "prop-types";
import enrollConfirmStyle from"./EnrollConfirmation.module.css";
import ThankyouPage from "../ThankyouPage/ThankyouPage";

const EnrollConfirmation = ({ form }) => {
  const displayElements = [];
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    if (element.type === "checkbox" && !element.checked) {
      continue;
    }
    displayElements.push(
      <form key={`${element.name}-${i}`}>
        <div key={`enroll-${i}`} className={enrollConfirmStyle.displayText}>
          {element.name}: {element.value}
        </div>
      </form>
      
    );
  }

  return (<div >
            <div>
                <ThankyouPage/>
            </div>
            <div className={enrollConfirmStyle.confirmPage}>
              {displayElements}
            </div>
          </div>
          
          );
};

EnrollConfirmation.propTypes = {
  form: PropTypes.object.isRequired
};

export default EnrollConfirmation;
