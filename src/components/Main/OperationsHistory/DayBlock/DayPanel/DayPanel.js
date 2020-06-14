import React from 'react';
import Icon from '../../../../Icon/Icon';
import PropTypes from 'prop-types';
import { getDateFormatted } from '../../../../../utils/utils';
import './DayPanel.scss';

const DayPanel = ({ date }) => {
    return (
        <div className="day-panel pl-9">
            <div className="day-panel__inner flex justify-between items-center border-b border-gray-600">
                <button className="font-medium text-xxl leading-tight focus:outline-none inline-flex items-center">
                    {getDateFormatted(date)}
                    <span className="ml-1 mt-1 opacity-50">
                        <Icon name="arrow-down" width="16px" height="8px" />
                    </span>
                </button>
                <div className="flex items-center text-xs font-medium">
                    <span className="text-gray-900">Добавить</span>
                    <button className="fill-gray-900 hover:fill-current focus:outline-none ml-2 h-7 w-7 hover:bg-gray-700 inline-flex justify-center items-center rounded-full bg-gray-400">
                        <Icon name="plus-icon" width="10px" height="10px" />
                    </button>
                </div>
            </div>
        </div>
    );
};

DayPanel.propTypes = {
    date: PropTypes.object.isRequired,
};

export default DayPanel;
