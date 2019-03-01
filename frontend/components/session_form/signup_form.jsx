import React, { Component } from 'react'; 
import { Link, Route, Redirect } from 'react-router-dom'; 

class SignupForm extends Component { 
  render() { 
    return ( 
      <div className="modal-signup-form"> 
        <h1>Create your AudioCaelum account</h1> 
        <form> 
          <input 
            className="return-to-email" 
            type="button" 
            value={this.props.email} 
            onClick={() => this.props.updateFormComponent('EmailForm')} 
          /> 
          <p className="choose-password">Choose a password <span>*</span></p> 
          <input 
            autoFocus 
            type="password" 
            value={this.props.password} 
            onChange={this.props.update('password')} 
          /> 
          <div className="captcha"> 
            <div>We believe that you're not a robot.</div> 
            <img 
              className="captcha-logo" 
              src={window.images.CaptchaLogo} 
              alt="reCAPTCHA" 
            /> 
          </div> 
          <p className="terms-of-use"> 
            By signing up you agree to sell your soul to AudioCaelum. 
            Any and all personal belongings will become property of our institution. 
          </p> 
          <button onClick={this.props.handleSignup}>Accept & continue</button> 
          <div className="signin-reminder"> 
            <h3>Are you trying to sign in?</h3> 
            The email address that you entered was not found. <br /> 
            Double-check your email address. 
          </div> 
        </form> 
      </div> 
    ); 
  }; 
}; 

export default SignupForm; 
