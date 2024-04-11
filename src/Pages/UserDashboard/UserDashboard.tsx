import Homes from "../../Components/Homes/Homes";
import NavigationLoggedIn from "../../Components/NavigationLoggedIn/NavigationLoggedIn";
import Tasks from "../../Components/Tasks/Tasks";
import "./UserDashboard.scss";
// import { useState } from "react";

export default function UserDashboard(): JSX.Element | null | string {
  return (
    <>
      <main className="user-dashboard">
        <h1 className="user-dashboard__header1">PETTY TRACKER</h1>
        <h2 className="user-dashboard__greeting">Hey User!</h2>
        <p className="user-dashboard__text1">
          You can use this dashboard to keep track of your home and tasks
        </p>
        <Homes />
        <Tasks />
      </main>
      <NavigationLoggedIn />
    </>
  );
}
