import React from "react";
import ReactDOMServer from "react-dom/server";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import "../ReminderNotification/ReminderNotification.css"; // Make sure you have the relevant styles in your CSS file
import SearchBar from "../../components/SearchBar/SearchBar";
import profilePicture from "../../Assets/Salad.png";
import NotificationContainer from "../../components/NotificationContainer/NotificationContainer";
import Header from "../../components/Header/Header";

function ReminderNotification() {
  return (
    <div className="App">
      <CollapseSideBar />

      <Header />

      <div>
        <NotificationContainer />
      </div>
    </div>
  );
}

export default ReminderNotification;
