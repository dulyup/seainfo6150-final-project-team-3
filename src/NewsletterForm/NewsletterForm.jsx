import React, { Component } from 'react'

import style from "./NewsletterForm.module.css"

class NewsletterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    }
  }

  onSubmit = () => {
    this.setState({
      submitted: true
    });
  }

  render() {
    return this.state.submitted ? (
      <div className={style.result}>Succeed, thank you!</div>
    ) : (
        <div className={style.newsletterBox}>
            <img src={"images/campus3.jpg"} alt={"campus"} className={style.pic}/>
            <form className={style.form} onSubmit={this.onSubmit}>
                <div className={style.sloganUp}>Never miss an update</div>
                <div className={style.sloganDown}>Sign up and get newsletters</div>
                <input type={"email"} name={"emailAddress"} placeholder={"Email Address *"} className={style.email} required/>
                <button className={style.signUp}>Sign up</button>
            </form>
        </div>
    )
  }
}

export default NewsletterForm;
