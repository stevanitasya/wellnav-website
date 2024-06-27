import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../SignInForm/SignInForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignInForm = () => {
  const navigate = useNavigate();
  const backendUrl =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/users/login`,
        values
      );
      const { token, username } = response.data;

      // Save the token and username in local storage or cookies
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);

      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors({ username: error.response.data.error });
      } else {
        setErrors({ username: "An error occurred. Please try again." });
      }
    }
    setSubmitting(false);
  };

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div className="input-group-signin">
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="input-field"
            />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div className="input-group-signin">
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="input-field"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            <h1>Masuk</h1>
          </button>
          <div className="signup-link">
            <span>Belum punya akun?</span>
            <button
              type="button"
              className="link-button"
              onClick={navigateToSignUp}
            >
              Daftar
            </button>
          </div>
          <div className="login-methods">
            <div className="login-method"></div>
            <div className="login-method"></div>
            <div className="login-method"></div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
