import React, { useEffect } from "react";
import Auth from "../utils/auth";

export default function Logout() {
  useEffect(() => {
    if (Auth.loggedIn()) {
      Auth.logout();
    }
  }, []);

  return <h1>Logout</h1>;
}
