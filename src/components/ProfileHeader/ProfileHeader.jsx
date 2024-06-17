import React, { useEffect, useState } from "react";
import "../ProfileHeader/ProfileHeader.css";
import profilePicture from "../../Assets/Profile.png";
import profileImage from "../../Assets/ProfileImage.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfileHeader = () => {
  const [username, setUsername] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/profile/666fde9ca7d9380a078106a0`);
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [userId]);

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
