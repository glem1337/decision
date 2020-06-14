import React, { useState } from 'react';
import Icon from '../../../../Icon/Icon';
import ViewTab from './ViewTab/ViewTab';

const INITIAL_STATE = [
    {
        type: 'list',
        icon: 'list-icon',
    },
    {
        type: 'calendar',
        icon: 'calendar-gray-icon',
    },
];

const View = () => {
    const [types] = useState(INITIAL_STATE);
    const [activeItem, setActive] = useState('list');

    return (
        <div className="flex items-center text-md">
            <span className="text-gray-900">Вид:</span>
            {types.map((view, index) => (
                <ViewTab
                    active={activeItem === view.type}
                    key={`view-tab-key-${index}-${Date.now()}`}
                    icon={view.icon}
                    handleItem={() => setActive(view.type)}
                />
            ))}
        </div>
    );
};

export default View;
