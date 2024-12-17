import RequestAuth from "../components/request-auth";
import React from "react";
import { useAuth } from "../providers/auth";

export default function Profile() {
  const auth = useAuth();

  if (!auth.isAuthenticated) return <RequestAuth />;

  return <div>Profile Page</div>;
}
