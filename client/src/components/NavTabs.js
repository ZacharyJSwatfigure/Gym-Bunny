import React from "react";
import "../style/header.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="navbarUl">
      <li className="navTab">
        <a
          style={{
            textDecoration: "none",
            borderRadius: "20px",
            padding: "10%",
            backgroundColor: "rgb(46,63,145)",
            color: "rgb(255,253,254)",
          }}
          href="#search"
          onClick={() => handlePageChange("Search")}
          className={currentPage === "Search" ? "nav-link active" : "nav-link"}
        >
          Search
        </a>
      </li>
      <li className="navTab">
        <a
          style={{
            textDecoration: "none",
            borderRadius: "20px",
            padding: "10%",
            backgroundColor: "rgb(46,63,145)",
            color: "rgb(255,253,254)",
          }}
          href="#about"
          onClick={() => handlePageChange("Saved")}
          className={currentPage === "Saved" ? "nav-link active" : "nav-link"}
        >
          Saved
        </a>
      </li>
      <li className="navTab">
        <a
          style={{
            textDecoration: "none",
            borderRadius: "20px",
            padding: "10%",
            backgroundColor: "rgb(46,63,145)",
            color: "rgb(255,253,254)",
          }}
          href="#login"
          onClick={() => handlePageChange("Login")}
          className={currentPage === "Login" ? "nav-link active" : "nav-link"}
        >
          Login
        </a>
      </li>
      <li className="navTab">
        <a
          style={{
            textDecoration: "none",
            borderRadius: "20px",
            padding: "10%",
            backgroundColor: "rgb(46,63,145)",
            color: "rgb(255,253,254)",
          }}
          href="#signup"
          onClick={() => handlePageChange("SignUp")}
          className={currentPage === "SignUp" ? "nav-link active" : "nav-link"}
        >
          SignUp
        </a>
      </li>

      <li className="navTab">
        <a
          style={{
            textDecoration: "none",
            borderRadius: "20px",
            padding: "10%",
            backgroundColor: "rgb(46,63,145)",
            color: "rgb(255,253,254)",
          }}
          href="#logout"
          onClick={() => handlePageChange("Logout")}
          className={currentPage === "Logout" ? "nav-link active" : "nav-link"}
        >
          Logout
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
