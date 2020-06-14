import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../Icon/Icon';
import classNames from 'classnames';
import './MenuItem.scss';

const MenuItem = ({ name, icon, isActive = false, handleItem }) => {
    const itemClass = classNames(
        'mb-4 transition ease-in opacity-50 duration-100 rounded flex items-center hover:bg-gray-400 hover:opacity-100',
        { 'opacity-100 bg-gray-400': isActive }
    );
    return (
        <li onClick={handleItem} className="menu-item leading-none">
            <a className={itemClass} href={`#${name}`}>
                {icon && (
                    <span className="mr-2">
                        <Icon name={icon} width="16" height="16" />
                    </span>
                )}
                {name}
            </a>
        </li>
    );
};

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    isActive: PropTypes.bool,
    handleItem: PropTypes.func.isRequired,
};

export default MenuItem;
