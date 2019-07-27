import React from "react";

import NewsLetterForm from '../NewsletterForm/NewsletterForm';

import sharedStyle from "../Shared.module.css";

const HomePage = () => {
  return (
    <div className={sharedStyle.homeAboutPage}>
      <hr/>
      <p className={sharedStyle.firstPar}>
        <span className={sharedStyle.initial}>"</span>
        Seattle Technological University is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally.
        <span className={sharedStyle.initial}>"</span>
      </p>
      <img src={"images/graduation.jpeg"} alt={"Students"} className={sharedStyle.image}/>
      <section className={sharedStyle.description}>
        <p>
          <span className={sharedStyle.initial}>W</span>
          e have an enrollment of over 20,000 degree
          candidates, including undergraduate, graduate, and professional students.
          We have more than 360,000 alumni around the world.
        </p>
        <p>
          Our faculty are engaged with teaching and research to push the boundaries
          of human knowledge. For students who are excited to investigate the
          biggest issues of the 21st century, we offer an unparalleled student
          experience and a generous financial aid program, with over $160 million
          awarded to more than 60% of our undergraduate students. We have six
          degree-granting Schools, offering a truly global education.
        </p>
        <p>
          Established in 1936, Seattle Technological University is the oldest
          institution of higher education in Seattle.
        </p>
      </section>
      <NewsLetterForm/>
    </div>
  );
};

export default HomePage;
