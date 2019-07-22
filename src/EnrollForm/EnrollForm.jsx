import React from "react";
import PropTypes from "prop-types";

const EnrollForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      This is the enrollment form 

      <div><input type="text" name="foo" /></div>
      <div><input type="text" name="bar" /></div>
      <div><input type="text" name="baz" />name</div>
        <input type={"checkbox"}  value={"ai"}/>
        <input type={"checkbox"}  value={"ds"}/>
        <input type={"checkbox"}  value={"db"}/>
      <input type="submit" value="Submit enrollment" />
    </form>
  );
};

EnrollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
export default EnrollForm;
