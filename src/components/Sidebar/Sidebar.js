import React from 'react';
import Logo from '../../assets/images/logo.svg';
import Menu from './Menu/Menu';
import MoneyInfo from './MoneyInfo/MoneyInfo';
import UserInfo from './UserInfo/UserInfo';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar overflow-y-scroll z-20 fixed h-full top-0 right-0">
            <div className="rounded-lg bg-gray-300 min-h-full flex flex-col">
                <div className="sidebar__inner flex-1">
                    <div className="flex justify-between">
                        <h2 className="font-medium text-xxl leading-tight">Все деньги</h2>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <MoneyInfo />
                    <Menu />
                </div>
                <UserInfo />
            </div>
        </div>
    );
};

export default Sidebar;
