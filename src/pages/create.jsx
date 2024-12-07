import RequestAuth from "../components/request-auth";
import React from "react";

export default function Create() {
  const isLoggedIn = false;

  if (!isLoggedIn) return <RequestAuth />;

  return (
    <div>
      <h3>Erstelle Reisen und Inhalte</h3>
      <p>Kommt bald....</p>
    </div>
  );
}
