import logo from "./logo.svg";
import { app } from "./firebasebase.conf";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import NewUserPage from "./pages/User/NewUserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/Password/ResetPassword";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    // <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<NewUserPage />} />
        <Route path="/PasswordReset" element={<ResetPassword />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    /* </div> */
  );
}

export default App;
