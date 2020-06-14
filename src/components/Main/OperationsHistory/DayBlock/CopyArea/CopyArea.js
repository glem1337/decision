import React from 'react';
import Icon from '../../../../Icon/Icon';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CopyArea = ({ dayID }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.OPERATION,
        drop: () => ({
            action: 'copy',
            copyTo: dayID,
        }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const className = classNames('absolute top-full w-full pl-9', {
        block: canDrop,
        'hidden pointer-events-none': !canDrop,
    });

    const iconClass = classNames('ml-2 w-7 h-7 rounded-full flex items-center justify-center', {
        'bg-primary-500 fill-white': isOver,
        'bg-gray-500 fill-gray-1000': !isOver,
    });

    return (
        <>
            <div ref={drop} className={className}>
                <div className="border-b border-gray-600 flex justify-center">
                    <div className="absolute flex items-center -top-5 -ml-4 text-xs text-gray-900 font-medium px-2 py-2 bg-gray-100 rounded-lg">
                        Копировать операцию
                        <span className={iconClass}>
                            <Icon name="copy-icon" width="16px" height="16px" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

CopyArea.propTypes = {
    dayID: PropTypes.number.isRequired,
};

export default CopyArea;
