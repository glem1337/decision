import React from 'react';
import Calendar from './Calendar/Calendar';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar fixed top-0 left-0 w-full z-10">
            <div className="navbar__inner bg-gray-100 flex items-center">
                <div className="mr-4">
                    <Calendar />
                </div>
                <Search />
                <div className="ml-auto">
                    <Filter />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
