import React from 'react';
import PropTypes from 'prop-types';
import DayPanel from './DayPanel/DayPanel';
import DayItem from './DayItem/DayItem';
import CopyArea from './CopyArea/CopyArea';

const DayBlock = ({ data, id, removeOperation, copyOperation, updateDescription }) => {
    return (
        <div className="day-block relative mb-5">
            <DayPanel date={data.date} />
            {data.list.length > 0 ? (
                <ul className="text-sm w-full">
                    {data.list.map((operation, index) => (
                        <DayItem
                            removeOperation={removeOperation}
                            copyOperation={copyOperation}
                            updateDescription={updateDescription}
                            key={`day-item-key-${index}`}
                            cardID={index}
                            dayID={id}
                            operation={operation}
                        />
                    ))}
                </ul>
            ) : (
                <div className="pl-9">
                    <div className="h-28 flex items-center justify-center">
                        No data for this period
                    </div>
                </div>
            )}
            <CopyArea dayID={id} />
        </div>
    );
};

DayBlock.propTypes = {
    id: PropTypes.number.isRequired,
    removeOperation: PropTypes.func.isRequired,
    copyOperation: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired,
    data: PropTypes.shape({
        date: PropTypes.object.isRequired,
        list: PropTypes.array,
    }),
};

export default DayBlock;
