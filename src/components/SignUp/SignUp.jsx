import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState("");
  const {createUser}=useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    setError('');
    
    if (password !== confirm) {
      setError("your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    console.log(email, password, confirm);
    createUser(email,password)
    .then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            form.reset()

    })
    .catch((error)=>{
        console.log(error);
        setError(error.message)

    })

  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up </h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Your Password"
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Conform Password</label>
          <input
            type="password"
            name="confirm"
            id=""
            required
            placeholder="Your Password"
          />
        </div>
        <input className="btn-submit" type="submit" value="Sign up" />
      </form>
      <p>
        <small>
          Already have an account?<Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
