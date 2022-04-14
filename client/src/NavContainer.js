import React, { useState } from "react";
import NavTabs from "./components/NavTabs";
import Login from "./containers/Login";
import Search from "./containers/Search";
import Saved from "./containers/Saved";
import SignUp from "./containers/SignUp";
import Logout from "./containers/Logout";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Login");

  const renderPage = () => {
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Search") {
      return <Search />;
    }
    if (currentPage === "Saved") {
      return <Saved />;
    }
    if (currentPage === "SignUp") {
      return <SignUp />;
    }
    return <Logout />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
