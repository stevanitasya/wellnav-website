import React from "react";
import { useLocation } from "react-router-dom"
import SignInForm from "../../components/SignInForm/SignInForm";
import "../SignIn/SignIn.css";

function SignIn() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isVerified = query.get('verified');

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
