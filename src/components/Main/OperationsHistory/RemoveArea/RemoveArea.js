import React from 'react';
import Icon from '../../../Icon/Icon';
import classNames from 'classnames';
import './RemoveArea.scss';
import PropTypes from 'prop-types';

const RemoveArea = ({ innerRef, canDrop, isOver, ...props }) => {
    const className = classNames(
        'remove-area justify-center flex items-center z-50 fixed fill-d8 rounded-full border border-d8',
        {
            'opacity-100': canDrop,
            'opacity-0': !canDrop,
            'bg-white': !isOver,
            'bg-secondary-500': isOver,
        }
    );

    return (
        <div ref={innerRef} {...props} className={className}>
            <Icon name="trash-icon" width="29px" height="29px" />
        </div>
    );
};

RemoveArea.propTypes = {
    innerRef: PropTypes.func.isRequired,
    canDrop: PropTypes.bool.isRequired,
    isOver: PropTypes.bool.isRequired,
};

export default RemoveArea;
