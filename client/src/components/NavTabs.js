
import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="navbarUl">
            <li className="navTab">
                <a
                    style={{ textDecoration: 'none', border: '1px solid pink', borderRadius: '20px', padding: '10%', backgroundColor: 'pink', color: 'black'}}
                    href="#search"
                    onClick={() => handlePageChange('Search')}
                    className={currentPage === 'Search' ? 'nav-link active' : 'nav-link'}
                >
                    Search
                </a>
            </li>
            <li className="navTab">
                <a
                    style={{ textDecoration: 'none', border: '1px solid pink', borderRadius: '20px', padding: '10%', backgroundColor: 'pink', color: 'black'}}

                    href="#about"
                    onClick={() => handlePageChange('Saved')}
                    className={currentPage === 'Saved' ? 'nav-link active' : 'nav-link'}
                >
                    Saved
                </a>
            </li>
            <li className="navTab">
                <a
                    style={{ textDecoration: 'none', border: '1px solid pink', borderRadius: '20px', padding: '10%', backgroundColor: 'pink', color: 'black'}}
                    href="#login"
                    onClick={() => handlePageChange('Login')}
                    className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
                >
                    Login
                </a>
            </li>
            <li className="navTab">
                <a
                    style={{ textDecoration: 'none', border: '1px solid pink', borderRadius: '20px', padding: '10%', backgroundColor: 'pink', color: 'black'}}
                    href="#signup"
                    onClick={() => handlePageChange('SignUp')}
                    className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}
                >
                    SignUp
                </a>
            </li>

            <li className="navTab">
                <a
                    style={{ textDecoration: 'none', border: '1px solid pink', borderRadius: '20px', padding: '10%', backgroundColor: 'pink', color: 'black'}}
                    href="#logout"
                    onClick={() => handlePageChange('Logout')}
                    className={currentPage === 'Logout' ? 'nav-link active' : 'nav-link'}
                >
                    Logout
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;
