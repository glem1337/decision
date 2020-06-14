import React, { useState } from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.scss';

const INITIAL_STATE = [
    {
        name: 'Операции',
        icon: 'operation-icon',
    },
    {
        name: 'Отчеты',
        icon: 'reports-icon',
    },
    {
        name: 'Контрагенты',
        icon: 'contragents-icon',
    },
    {
        name: 'Проекты',
        icon: 'union-icon',
    },
    {
        name: 'Статьи расходов',
        icon: 'accounts-icon',
    },
    {
        name: 'Сотрудники',
        icon: 'person-icon',
    },
];

const Menu = () => {
    const [menuItems] = useState(INITIAL_STATE);
    const [activeItem, setActive] = useState(0);

    return (
        <nav className="menu text-lg font-medium">
            <ul>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={`menu-item-key-${item.name}`}
                        name={item.name}
                        icon={item.icon}
                        isActive={activeItem === index}
                        handleItem={() => setActive(index)}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
