import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = ({ name, active, handleItem }) => {
    const buttonClass = classNames(
        'focus:outline-none text-gray-900 font-medium ml-3 h-8 px-3 hover:bg-gray-500 hover:text-gray-1200 inline-flex justify-center items-center rounded-lg bg-gray-100 border border-gray-400',
        { 'text-gray-1200 bg-gray-500': active }
    );
    return (
        <button className={buttonClass} onClick={handleItem}>
            {name}
        </button>
    );
};

Tab.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
    handleItem: PropTypes.func.isRequired,
};

export default Tab;
