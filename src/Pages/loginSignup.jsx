import React from "react";
import "./CSS/loginsignup.css";

const loginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button>Continue</button>
        <p className="logisignup-login">
          Already Have An Account{"  "}
          <span>
            <a href="#"> Login Here</a>
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Contiuning , I agree the turms of use & Privacy Policy. </p>
        </div>
      </div>
    </div>
  );
};
export default loginSignup;
