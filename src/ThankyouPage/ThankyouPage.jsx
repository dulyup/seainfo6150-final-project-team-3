import React from 'react';

import {Link} from "react-router-dom";

import thankyouStyle from "./ThankyouPage.module.css"

const ThankyouPage = () => {
    return (
      <div>
        <form className={thankyouStyle.confirm}>
          <div className={thankyouStyle.firstPara}>
            <h2>Thank you !</h2>
            <p className={thankyouStyle.confirmationText}>We have received your application. </p>
            <p className={thankyouStyle.confirmationText}>Please check your email for further instructions!</p>
          </div>
            
           <div className={thankyouStyle.contactText}>
               <label className={thankyouStyle.troubleText}>
                   Having trouble? 
               </label>
               <Link to={"/contact"} className={thankyouStyle.contactButton}>Contact us</Link>
           </div>
           <div className={thankyouStyle.contactText} >
               <Link to={"/"} className={thankyouStyle.homeButton} >
                   Back to homepage
               </Link>
           </div>
        </form>
      </div>
    )
  }
  
  export default ThankyouPage;