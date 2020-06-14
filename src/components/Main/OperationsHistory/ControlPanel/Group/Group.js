import React from 'react';
import Icon from '../../../../Icon/Icon';

const Group = () => {
    return (
        <div className="flex items-center text-md">
            <span className="text-gray-900">Группировать:</span>
            <button className="focus:outline-none ml-2 h-8 w-45 hover:bg-gray-600 inline-flex justify-between items-center pl-3 pr-2 rounded-lg bg-gray-100 border border-gray-400">
                <span className="text-xs font-medium">По дате</span>
                <Icon name="arrow-down" width="16px" height="8px" />
            </button>
        </div>
    );
};

export default Group;
