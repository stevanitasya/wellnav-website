import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../components/ProfileForm/ProfileForm.css";
import axios from "axios";

const ProfileForm = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';
  const [isEditing, setIsEditing] = useState(false);
  const [initialProfileData, setInitialProfileData] = useState({
    username: "",
    email: "",
    age: "",
    healthCondition: [],
  });
  const token = localStorage.getItem("token");

  const profileSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Must be positive")
      .integer("Must be an integer"),
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setInitialProfileData({
          ...response.data,
          healthCondition: Array.isArray(response.data.healthCondition) ? response.data.healthCondition : [response.data.healthCondition]
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [backendUrl, token]);

  const handleEditClick = (formik) => {
    if (isEditing) {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0) {
          formik.handleSubmit();
          setIsEditing(false);
        }
      });
    } else {
      setIsEditing(true);
    }
  };

  return (
    <Formik
      initialValues={initialProfileData}
      validationSchema={profileSchema}
      onSubmit={async (values) => {
        try {
          await axios.put(`${backendUrl}/api/users/profile`, values, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setIsEditing(false);
        } catch (error) {
          console.error("Error updating profile data:", error);
        }
      }}
      enableReinitialize
    >
      {({ values, handleChange, handleSubmit, validateForm }) => (
        <div className="Profile">
          <Form>
            <div className="Profile-Field">
              <div className="Profile-Label">
                <h1>Username</h1>
              </div>
              <div className="Profile-Colon">
                <h1>:</h1>
              </div>
              <div className="field-and-error-msg">
                <div className={`Profile-Data ${isEditing ? "editing" : ""}`}>
                  {isEditing ? (
                    <Field
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      className="Profile-Input"
                    />
                  ) : (
                    <h1>{values.username}</h1>
                  )}
                </div>
                {isEditing && (
                  <div className="Profile-Error">
                    <ErrorMessage name="username" component="div" />
                  </div>
                )}
              </div>
            </div>
            <div className="Profile-Field">
              <div className="Profile-Label">
                <h1>Email</h1>
              </div>
              <div className="Profile-Colon">
                <h1>:</h1>
              </div>
              <div className="field-and-error-msg">
                <div className={`Profile-Data ${isEditing ? "editing" : ""}`}>
                  {isEditing ? (
                    <Field
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className="Profile-Input"
                    />
                  ) : (
                    <h1>{values.email}</h1>
                  )}
                </div>
                {isEditing && (
                  <div className="Profile-Error">
                    <ErrorMessage name="email" component="div" />
                  </div>
                )}
              </div>
            </div>
            <div className="Profile-Field">
              <div className="Profile-Label">
                <h1>Age</h1>
              </div>
              <div className="Profile-Colon">
                <h1>:</h1>
              </div>
              <div className="field-and-error-msg">
                <div className={`Profile-Data ${isEditing ? "editing" : ""}`}>
                  {isEditing ? (
                    <Field
                      type="number"
                      name="age"
                      value={values.age}
                      onChange={handleChange}
                      className="Profile-Input"
                    />
                  ) : (
                    <h1>{values.age}</h1>
                  )}
                </div>
                {isEditing && (
                  <div className="Profile-Error">
                    <ErrorMessage name="age" component="div" />
                  </div>
                )}
              </div>
            </div>
            <div className="Profile-Field">
              <div className="Profile-Label">
                <h1>Health Condition</h1>
              </div>
              <div className="Profile-Colon">
                <h1>:</h1>
              </div>
              <div className="field-and-error-msg">
                <div className="Profile-Data">
                  <h1>{Array.isArray(values.healthCondition) ? values.healthCondition.join(", ") : values.healthCondition}</h1>
                </div>
              </div>
            </div>
            <div className="edit-profile-button-position">
              <button
                type="button"
                className="edit-profile-button"
                onClick={() =>
                  handleEditClick({ values, handleSubmit, validateForm })
                }
              >
                <h1>{isEditing ? "Simpan" : "Ubah"}</h1>
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ProfileForm;