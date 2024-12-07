import RequestAuth from "../components/request-auth";
import React from "react";

export default function Profile() {
  const isLoggedIn = false;
  if (!isLoggedIn) return <RequestAuth />;
  return <div>Profile Page</div>;
}