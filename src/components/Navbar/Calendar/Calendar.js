import React from 'react';
import Icon from '../../Icon/Icon';

const Calendar = () => {
    return (
        <div className="calendar inline-flex h-11">
            <button className="focus:outline-none hover:bg-gray-600 inline-flex justify-center items-center w-11 rounded-lg border border-gray-600">
                <Icon name="arrow-left" width="20px" height="10px" />
            </button>
            <button className="focus:outline-none hover:bg-gray-600 inline-flex justify-center items-center mx-1 px-3 rounded-lg border border-gray-600">
                <Icon name="calendar-black-icon" width="16px" height="16px" />
                <span className="text-sm font-medium ml-3">Июль</span>
            </button>
            <button className="focus:outline-none hover:bg-gray-600 inline-flex justify-center items-center w-11 rounded-lg border border-gray-600">
                <Icon name="arrow-right" width="20px" height="10px" />
            </button>
        </div>
    );
};

export default Calendar;
