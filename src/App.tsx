import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userId, setUserId] = useState<string>("");

  console.log(userId);
  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path={`/user123`} //change to {userId}!
            element={
              isLoggedIn ? (
                <UserDashboard />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} />
              )
            }
          />
          {/* 
        <Route path="/forgot-pw" element={<ForgotPW />} />
        <Route path="/set-new-pw" element={<SetNewPassword />} />
        
        <Route path="/home-dashboard" element={<HomeDashboard />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
