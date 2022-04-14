import React from "react";
import "../style/currentUser.css";

function CurrentUser() {
  const loggedInUser = localStorage.getItem("username");

  return (
    <section className="currentUserHolder">
      <h1 className="currentUser">
        Hop to it{loggedInUser ? ", " + localStorage.getItem("username") : ""}!
      </h1>
    </section>
  );
}

export default CurrentUser;
