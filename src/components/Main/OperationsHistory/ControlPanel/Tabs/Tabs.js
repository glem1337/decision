import React, { useState } from 'react';
import Tab from './Tab/Tab';

const INITIAL_STATE = [
    {
        name: 'Все операции',
    },
    {
        name: 'Будущие',
    },
    {
        name: 'Прошедшие',
    },
];

const Tabs = () => {
    const [tabs] = useState(INITIAL_STATE);
    const [activeItem, setActive] = useState('Все операции');

    return (
        <div className="flex items-center text-xs">
            {tabs.map((tab, index) => (
                <Tab
                    active={activeItem === tab.name}
                    key={`tab-key-${index}-${Date.now()}`}
                    name={tab.name}
                    handleItem={() => setActive(tab.name)}
                />
            ))}
        </div>
    );
};

export default Tabs;
