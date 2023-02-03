// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <VideoPage />
            </PrivateRoute>
          }
        />
        <Route exact path="/:videoId" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/home' element={<VideoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
