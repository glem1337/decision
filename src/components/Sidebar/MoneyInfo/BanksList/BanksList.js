import React from 'react';

const BanksList = () => {
    return (
        <ul className="bank-list text-xxs">
            <li className="flex justify-between">
                <span className="text-gray-1100">monobank</span>
                <span>312 471 ₴</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-1100">monobank, $</span>
                <span>8 797 $</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-1100">Касса</span>
                <span>234 097 ₴</span>
            </li>
        </ul>
    );
};

export default BanksList;
