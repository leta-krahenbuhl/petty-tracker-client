import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          {/* 
        <Route path="/forgot-pw" element={<ForgotPW />} />
        <Route path="/set-new-pw" element={<SetNewPassword />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/home-dashboard" element={<HomeDashboard />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
