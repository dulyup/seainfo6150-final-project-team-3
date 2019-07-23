import React, {Component} from 'react'

import EnrollForm from "../EnrollForm/EnrollForm";

import style from "./SignUp.module.css";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    }
  }

  onSubmit = e => {
    this.setState({
      submitted: true
    });
  };

  render() {
    return this.state.submitted ? (
      <div>
        <hr/>
        <p className={style.result}>Succeed, thank you!</p>
      </div>
    ) : (
      <div>
        <hr/>
        <br/>
        <EnrollForm onSubmit={this.onSubmit} degrees={this.props.degrees}/>
      </div>
    )
  }
}

export default SignUpPage;