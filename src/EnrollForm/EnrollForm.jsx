import React from "react";
import PropTypes from "prop-types";
import enrollFormStyle from"./EnrollForm.module.css";

const EnrollForm = ({onSubmit, degrees}) => {
  return (
       <form className={enrollFormStyle.form} onSubmit={onSubmit}>

        <div className={enrollFormStyle.oneRow}>
          <div className={enrollFormStyle.left}>
            <label htmlFor="fullName">Full Name</label>
            <span className={enrollFormStyle.required}>*</span>
          </div>
          <div className={enrollFormStyle.right}> 
            <input type="text" name="Full Name"  />
          </div>
        </div>
        
        <div className={enrollFormStyle.oneRow}>
          <div className={enrollFormStyle.left}>
            <label htmlFor="emailAddress">Email Address</label>
            <span className={enrollFormStyle.required}>*</span>
          </div>
          <div className={enrollFormStyle.right}>
            <input type="email" id="email" name="Email Address" placeholder="foo@bar.com"  />
          </div>
        </div>

        <div className={enrollFormStyle.oneRow}>
          <div className={enrollFormStyle.left}>
            <label htmlFor="state" >State</label>
            <span className={enrollFormStyle.required}>*</span>
          </div>
          <div className={enrollFormStyle.right}>
            <select name="State" >
            <option value="none"></option>
              <option value="WA">Washington</option>
              <option value="NY">NewYork</option>
              <option value="ALAS">Alaska</option>
            </select>
          </div>
        </div>
  
        <div className={enrollFormStyle.oneRow}>
          <div className={enrollFormStyle.left}>
          <label htmlFor="streetAddress" >Street Address</label><span className={enrollFormStyle.required}>*</span>
          </div>
          <div className={enrollFormStyle.right}>
            <input type="text" name="Street Address" />
          </div>
        </div>

        <div className={enrollFormStyle.oneRow}>
          <div className={enrollFormStyle.left}>
            <label htmlFor="city" >City</label><span className={enrollFormStyle.required}>*</span>
          </div>
          <div className={enrollFormStyle.right}>
            <input type="text" name="City"  />
          </div>
        </div>
          
        <div className={enrollFormStyle.oneRow}>
          <div className={enrollFormStyle.left}>
            <label htmlFor="zipcode" >Zipcode</label><span className={enrollFormStyle.required}>*</span>
          </div>
          <div className={enrollFormStyle.right}>
            <input type="text" name="ZipCode" pattern="[0-9]{5}"  />
          </div>
        </div>

        <div className={enrollFormStyle.oneRow}>
          <div className={enrollFormStyle.left}>
            <label htmlFor="phoneNumber" >Phone Number</label><span className={enrollFormStyle.required}>*</span>
          </div>
          <div className={enrollFormStyle.right}>
            <input type="tel" id="phone" name="Phone Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
          </div>
        </div>

        <div className={enrollFormStyle.oneRow}>
          <div className={enrollFormStyle.left}>
            <label htmlFor="birthDate" >Date Of Birth</label><span className={enrollFormStyle.required}>*</span>
          </div>
          <div className={enrollFormStyle.right}>
            <input id="date" name="Birth Date" type="date" />
          </div>
        </div>

        <div className={enrollFormStyle.oneRow}>
          <div className={enrollFormStyle.left}>
            <label htmlFor="gender">Gender</label><span className={enrollFormStyle.required}>*</span>
          </div>
          <div className={enrollFormStyle.right}> 
            <select id="gender" name="Gender" >
            <option value="none"></option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
            <option value="Prefer Not To Say">Prefer Not To Say</option>
            </select>
          </div>
        </div>

        <div className={enrollFormStyle.oneRow}>
          <div className={enrollFormStyle.left}>
            <label htmlFor="pronouns">Preferred Pronouns</label><span className={enrollFormStyle.required}>*</span>
          </div>
          <div className={enrollFormStyle.right}> 
            <select id="pronouns" name="Pronouns" >
              <option value="none"></option>
              <option value="she/her">she/her</option>
              <option value="he/him">he/him</option>
              <option value="they/them">they/them</option>
              <option value="Prefer Not To Say">prefer not to say</option>
            </select>
          </div>
        </div>

        <div className={enrollFormStyle.lastRow}>
          <div className={enrollFormStyle.left}>
            <label htmlFor="degrees">Preferred Degrees</label><span className={enrollFormStyle.required}>*</span>
          </div>
           <div className={enrollFormStyle.checkbox}> 
               {degrees.map((degree, index) => (
                <p key={index}>
                  <input type="checkbox" name="Preferred Degrees" key={degree.slug} value={degree.title}/>
                  {degree.title}
                </p>
              ))}       
          </div>
          </div>
        
          <div className={enrollFormStyle.submit}>
              <input type="submit" name="Submit Condition" value="Submit" />
          </div>
     </form>

  );
};

EnrollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
export default EnrollForm;
