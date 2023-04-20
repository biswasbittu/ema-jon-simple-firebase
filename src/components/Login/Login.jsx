import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Login coming sooon</h2>
      <form>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" required placeholder="Your Email"/>
        </div>
      </form>
    </div>
  );
};

export default Login;
