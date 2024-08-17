import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import "../SignIn/SignIn.css";

function SignIn() {
  return (
    <div>
      {isVerified && (
        <div className="verification-message">
          <p>Email Anda telah berhasil diverifikasi. Silakan masuk.</p>
        </div>
      )}
      <h1 className="sign-in-title">Masuk</h1>
      <SignInForm />
    </div>
  );
}

export default SignIn;
