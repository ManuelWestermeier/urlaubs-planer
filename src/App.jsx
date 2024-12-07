import React from "react";
import { Route, Routes } from "react-router-dom";
import DesktopNavbar from "./components/desktop-navbar";
import MobileNavbar from "./components/mobile-navbar";
import Home from "./pages/home";
import Search from "./pages/search";
import Subscriptions from "./pages/subscriptions";
import Profile from "./pages/profile";
import Create from "./pages/create";

export default function App() {
  return (
    <div>
      <DesktopNavbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}
