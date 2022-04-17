import React from "react";
import "../style/currentUser.css";

import Auth from "../utils/auth";

function CurrentUser() {
  let loggedInUser = localStorage.getItem("username");

  return (
    <section className="currentUserHolder">
      <h1 className="currentUser">
        Hop to it {loggedInUser ? ", " + loggedInUser : ""}!
      </h1>
    </section>
  );
}

export default CurrentUser;
