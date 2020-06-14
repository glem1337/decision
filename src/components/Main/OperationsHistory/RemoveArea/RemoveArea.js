import React from 'react';
import Icon from '../../../Icon/Icon';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
import classNames from 'classnames';
import './RemoveArea.scss';

const RemoveArea = () => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.OPERATION,
        drop: () => ({
            action: 'remove',
        }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const className = classNames(
        'remove-area justify-center items-center fixed fill-d8 rounded-full border border-d8',
        {
            flex: canDrop,
            'hidden pointer-events-none': !canDrop,
            'bg-white': !isOver,
            'bg-secondary-500': isOver,
        }
    );

    return (
        <div ref={drop} className={className}>
            <Icon name="trash-icon" width="29px" height="29px" />
        </div>
    );
};

export default RemoveArea;
