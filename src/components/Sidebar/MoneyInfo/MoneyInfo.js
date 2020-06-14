import React from 'react';
import MoneyList from './MoneyList/MoneyList';
import BanksList from './BanksList/BanksList';
import './MoneyInfo.scss';

const MoneyInfo = () => {
    return (
        <div className="money-info bg-gray-400 rounded-lg mb-4">
            <div className="money-info__money border-b border-gray-700">
                <div className="text-3xl ml-3 leading-tight font-medium">738 801 ₴</div>
                <MoneyList />
            </div>
            <div className="money-info__banks">
                <BanksList />
            </div>
        </div>
    );
};

export default MoneyInfo;
