import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Login from './pages/Login';
import Search from './pages/Search';
import Saved from './pages/Saved';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Login');


    const renderPage = () => {
        if (currentPage === 'Login') {
            return <Login />;
        }
        if (currentPage === 'Search') {
            return <Search />;
        }
        if (currentPage === 'Saved') {
            return <Saved />;
        }
        if (currentPage === 'SignUp') {
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
