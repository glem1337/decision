import React from 'react';
import Icon from '../../../../Icon/Icon';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CopyArea = ({ dayID, innerRef, canDrop, isOver, placeholder, ...props }) => {
    const className = classNames('absolute top-full w-full pl-9', {
        'opacity-100': canDrop,
        'opacity-0': !canDrop,
    });

    const iconClass = classNames(
        'ml-2 w-7 h-7 rounded-full z-50 flex items-center justify-center',
        {
            'bg-primary-500 fill-white': isOver,
            'bg-gray-500 fill-gray-1000': !isOver,
        }
    );

    return (
        <div ref={innerRef} {...props} className={className}>
            <div className="border-b border-gray-600 flex justify-center">
                <div className="absolute top-full flex items-center -top-5 -ml-4 text-xs text-gray-900 font-medium px-2 py-2 bg-gray-100 rounded-lg">
                    Копировать операцию
                    <span className={iconClass}>
                        <Icon name="copy-icon" width="16px" height="16px" />
                    </span>
                </div>
            </div>
            {placeholder}
        </div>
    );
};

CopyArea.propTypes = {
    dayID: PropTypes.number.isRequired,
    innerRef: PropTypes.func.isRequired,
    canDrop: PropTypes.bool.isRequired,
    isOver: PropTypes.bool.isRequired,
    placeholder: PropTypes.element.isRequired,
};

export default CopyArea;
