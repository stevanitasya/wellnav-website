import React, { useEffect, useState } from "react";
import "../ProfileHeader/ProfileHeader.css";
import profilePicture from "../../Assets/Profile.png";
import profileImage from "../../Assets/ProfileImage.png";
import axios from "axios";

const ProfileHeader = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  const [username, setUsername] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [backendUrl, token]);

  return (
    <div className="container-profile-position">
      <div className="container-profile">
        <div className="edit-profile-picture">
          <img
            src={profilePicture}
            alt="Profile"
            className="profile-picture-edit"
          /> 
          <button className="button">
            <h1>Ubah Foto</h1>
          </button>
        </div>
        <div className="greeting-and-image">
          <div className="profile-greeting">
            <h1>{username}</h1>
            <p>Selamat datang di profile.</p>
          </div>

          <img src={profileImage} alt="Sample" className="sample-image" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;