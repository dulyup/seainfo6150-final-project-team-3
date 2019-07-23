import React from 'react'
import ContactPageStyle from "./ContactPage.module.css";


const ContactPage = () => {
  return (
    <div className={ContactPageStyle.container}>
      <h2 className={ContactPageStyle.header}>Contact Us</h2>

      <div className={ContactPageStyle.page}>
        <div className={ContactPageStyle.email}>
          <h4 className={ContactPageStyle.bigger}>Email</h4>
          <p>sea.technology@stu.edu</p>
        </div>
        
        <div className={ContactPageStyle.Phone}>
          <h4  className={ContactPageStyle.bigger}>Phone</h4>
          <p>(+1)206-123-4567</p>
        </div>
        
        <div className={ContactPageStyle.Address}>
          <h4  className={ContactPageStyle.bigger}>Address</h4>
          <p>310 Terry Ave N</p>
          <p>Seattle WA, 98109</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
