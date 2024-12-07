import RequestAuth from "../components/request-auth";
import React from "react";

export default function Subscriptions() {
  const isLoggedIn = false;
  if (!isLoggedIn) return <RequestAuth />;
  return <div>Subscriptions Page</div>;
}
