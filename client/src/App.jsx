import { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Context from "./contexts/Context.js";
import OtpVerification from "./pages/OtpVerification.jsx";

const App = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get("https://mern-authentication-zlwb.onrender.com/api/v1/user/me", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data.user);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          setUser(null);
          setIsAuthenticated(false);
        });
    };
    getUser();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/otp-verification/:email/:phone"
            element={<OtpVerification />}
          />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
        </Routes>
        <ToastContainer theme="colored" />
      </Router>
    </>
  );
};

export default App;
