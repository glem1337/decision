import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../../../../Icon/Icon';
import './ViewTab.scss';

const ViewTab = ({ icon, active, handleItem }) => {
    const buttonClass = classNames(
        'view-tab focus:outline-none ml-2 hover:bg-gray-500 inline-flex justify-center items-center rounded-lg bg-gray-100 border border-gray-400',
        { 'bg-gray-500': active }
    );
    const iconClass = classNames({
        'opacity-100': active,
        'opacity-50': !active,
    });
    return (
        <button className={buttonClass} onClick={handleItem}>
            <span className={iconClass}>
                <Icon name={`${icon}`} width="16px" height="16px" />
            </span>
        </button>
    );
};

ViewTab.propTypes = {
    icon: PropTypes.string.isRequired,
    active: PropTypes.bool,
    handleItem: PropTypes.func.isRequired,
};

export default ViewTab;
