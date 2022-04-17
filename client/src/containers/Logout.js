import React, { useEffect } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { userMutations } from "../graphql";

export default function Logout() {
  const [logout, { error }] = useMutation(userMutations.logout);

  useEffect(() => {
    if (Auth.loggedIn()) {
      handleLogout();
    }
  }, []);

  const handleLogout = async () => {
    const { data } = await logout();
    if (data) {
      Auth.logout();
    }
  };

  return <h1>Logout</h1>;
}
