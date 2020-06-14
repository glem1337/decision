import React from 'react';
import './MoneyList.scss';

const MoneyList = () => {
    return (
        <ul className="money-list text-sm font-medium before:bg-gray-800">
            <li className="before:bg-gray-800">546 568 ₴</li>
            <li className="before:bg-gray-800">
                8 797 $ <span className="text-gray-1100">(237 233 ₴)</span>
            </li>
        </ul>
    );
};

export default MoneyList;
