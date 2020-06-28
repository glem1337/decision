import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../Icon/Icon';
import classNames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';
import './DayItem.scss';

const DayItem = ({
    operation: { grow, name, from, organization, operation, description, paid, balance },
    cardID,
    dayID,
    updateDescription,
    innerRef,
    isDragging,
    isDraggingOver,
    ...props
}) => {
    const onDescriptionChange = (e) => updateDescription(dayID, cardID, e.currentTarget.value);

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

    let isOver = false;
    const action = isDraggingOver ? isDraggingOver.split('-')[0] : isDraggingOver;

    if (action === 'copy' || action === 'remove') {
        isOver = true;
    }

    const itemClass = classNames(
        'day-item hover:bg-gray-200 hover:shadow relative flex rounded-lg items-center',
        {
            'bg-gray-200 shadow': isDragging,
            'bg-gray-100': !isDragging,
            'opacity-75': isOver,
        }
    );

    return (
        <li ref={innerRef} {...props} className={itemClass}>
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
            <div className="day-item__description leading-md flex">
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
    cardID: PropTypes.number.isRequired,
    dayID: PropTypes.number.isRequired,
    updateDescription: PropTypes.func.isRequired,
    innerRef: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    isDraggingOver: PropTypes.string,
};

export default DayItem;
