import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "../SignUp/SignUp.css";

function SignUp() {
  return (
    <div>
      <h1 className="sign-up-title">Daftar</h1>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
