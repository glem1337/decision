import React from 'react';
import Icon from '../../Icon/Icon';
import Followers from './Followers/Followers';
import './Filter.scss';

const Filter = () => {
    return (
        <div className="filter rounded-lg bg-gray-400 h-11 flex">
            <button className="focus:outline-none hover:bg-gray-600 inline-flex justify-center items-center px-2 rounded-lg bg-gray-100 border border-gray-400">
                <Icon name="filter-icon" width="16px" height="16px" />
                <span className="text-sm font-medium mx-2">Фильтр</span>
                <span className="mt-1">
                    <Icon name="arrow-down" width="16px" height="8px" />
                </span>
            </button>
            <Followers />
        </div>
    );
};

export default Filter;
