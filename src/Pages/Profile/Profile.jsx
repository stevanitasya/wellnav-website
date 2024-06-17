import React from "react";
import ReactDOMServer from "react-dom/server";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import "../Profile/Profile.css"; // Make sure you have the relevant styles in your CSS file
import Header from "../../components/Header/Header";
import profilePicture from "../../Assets/Profile.png";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

function Profile() {
  return (
    <div className="App">
      <CollapseSideBar />
      <Header />
      <ProfileHeader />
      <ProfileForm />
    </div>
  );
}

export default Profile;