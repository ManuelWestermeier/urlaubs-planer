import React from "react";
import { Route, Routes } from "react-router-dom";
import DesktopNavbar from "./components/desktop-navbar";
import MobileNavbar from "./components/mobile-navbar";
import Home from "./pages/home";
import Search from "./pages/search";
import Subscriptions from "./pages/subscriptions";
import Profile from "./pages/profile";
import Create from "./pages/create";
import PageNotFound from "./pages/page-not-found";
import CreateAccount from "./pages/profile/create-account";
import Login from "./pages/profile/login";
import RequestAuth from "./components/request-auth";
import Journey from "./pages/joureny";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/journey/:id" element={<Journey />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/create-account" element={<CreateAccount />} />
        <Route path="/profile/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/request-auth" element={<RequestAuth />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
