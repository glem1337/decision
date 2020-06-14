import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import Icon from '../../../../Icon/Icon';
import classNames from 'classnames';
import { ItemTypes } from '../../ItemTypes';
import TextareaAutosize from 'react-textarea-autosize';
import './DayItem.scss';

const DayItem = ({
    operation: { grow, name, from, organization, operation, description, paid, balance },
    cardID,
    dayID,
    removeOperation,
    copyOperation,
    updateDescription,
}) => {
    const onDescriptionChange = (e) => updateDescription(dayID, cardID, e.currentTarget.value);

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: ItemTypes.OPERATION, cardID, dayID },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                const { action } = dropResult;
                if (action === 'remove') {
                    removeOperation(item.cardID, item.dayID);
                } else if (action === 'copy') {
                    copyOperation(dropResult.copyTo, item.dayID, item.cardID);
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const growClass = classNames('inline-flex justify-center items-center rounded-lg', {
        'fill-primary-500 bg-primary-100': grow,
        'fill-secondary-500 bg-secondary-100': !grow,
    });
    const growIcon = grow ? 'vector-up-icon' : 'vector-down-icon';
    const balanceClass = classNames('text-base font-medium', {
        'text-primary-500': grow,
        'text-secondary-500': !grow,
    });
    const paidClass = classNames(
        'rounded-lg text-xxs font-medium px-2 h-7 inline-flex items-center',
        {
            'bg-primary-100 text-primary-500': paid,
            'bg-secondary-100 text-secondary-500': !paid,
        }
    );
    const itemClass = classNames(
        'day-item hover:bg-gray-200 hover:shadow flex rounded-lg cursor-move items-center',
        {
            'opacity-0': isDragging,
            'opacity-100': !isDragging,
        }
    );

    return (
        <li ref={dragRef} className={itemClass}>
            <div className="day-item__grow text-right">
                <span className={growClass}>
                    <Icon name={growIcon} width="8px" height="12px" />
                </span>
            </div>
            <div className="day-item__name">
                <div className="leading-md">{name}</div>
                <div className="text-xxs leading-md">
                    <span className="text-gray-900">Со счёта:</span> {from}
                </div>
            </div>
            <div className="day-item__organization">
                <div className="leading-md">{organization}</div>
                <div className="text-xxs leading-md text-gray-900">{operation}</div>
            </div>
            <div className="day-item__description leading-md cursor-text flex">
                <TextareaAutosize
                    onChange={onDescriptionChange}
                    className="bg-transparent w-full focus:outline-none focus:border-ce hover:border-ce border-b border-transparent resize-none"
                    value={description}
                />
            </div>
            <div className="pl-8 pr-2">
                <div className={paidClass}>{paid ? 'Оплачено' : 'Не оплачено'}</div>
            </div>
            <div className="pl-2 pr-4 text-right ml-auto">
                <span className={balanceClass}>{balance}</span>
            </div>
        </li>
    );
};

DayItem.propTypes = {
    cardID: PropTypes.number.isRequired,
    dayID: PropTypes.number.isRequired,
    removeOperation: PropTypes.func.isRequired,
    copyOperation: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired,
    operation: PropTypes.exact({
        grow: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        organization: PropTypes.string.isRequired,
        operation: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        paid: PropTypes.bool.isRequired,
        balance: PropTypes.string.isRequired,
    }),
};

export default DayItem;
