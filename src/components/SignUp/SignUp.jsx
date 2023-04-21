import React from 'react';
import "./SignUp.css";


const SignUp = () => {
    return (
        <div className="form-container">
      <h2 className="form-title">Sign Up </h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" 
          required placeholder="Your Email"/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" 
          required placeholder="Your Password"/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Conform Password</label>
          <input type="password" name="password" id="password" 
          required placeholder="Your Password"/>
        </div>
        <input className="btn-submit" type="submit" value="Sign up" />
      </form>
    </div>
    );
};

export default SignUp;