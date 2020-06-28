import React from 'react';
import PropTypes from 'prop-types';
import DayPanel from './DayPanel/DayPanel';
import DayItem from './DayItem/DayItem';
import CopyArea from './CopyArea/CopyArea';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { ItemTypes } from '../ItemTypes';

const DayBlock = ({ data, id, updateDescription, canDrop }) => {
    return (
        <Droppable droppableId={`list-${id}`} type={ItemTypes.OPERATION}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="day-block relative mb-5"
                >
                    <DayPanel date={data.date} />
                    {data.list.length > 0 ? (
                        <ul className="text-sm w-full">
                            {data.list.map((operation, index) => (
                                <Draggable
                                    key={`day-item-key-${index}`}
                                    draggableId={`draggable-${id}-${index}`}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <DayItem
                                            innerRef={provided.innerRef}
                                            isDragging={snapshot.isDragging}
                                            isDraggingOver={snapshot.draggingOver}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            updateDescription={updateDescription}
                                            cardID={index}
                                            dayID={id}
                                            operation={operation}
                                        />
                                    )}
                                </Draggable>
                            ))}
                        </ul>
                    ) : (
                        <div className="pl-9">
                            <div className="h-28 flex items-center justify-center">
                                No data for this period
                            </div>
                        </div>
                    )}
                    <Droppable droppableId={`copy-${id}`} type={ItemTypes.OPERATION}>
                        {(provided, snapshot) => (
                            <CopyArea
                                innerRef={provided.innerRef}
                                {...provided.droppableProps}
                                placeholder={provided.placeholder}
                                isOver={snapshot.isDraggingOver}
                                canDrop={canDrop}
                                dayID={id}
                            />
                        )}
                    </Droppable>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

DayBlock.propTypes = {
    data: PropTypes.shape({
        date: PropTypes.object.isRequired,
        list: PropTypes.array,
    }),
    id: PropTypes.number.isRequired,
    updateDescription: PropTypes.func.isRequired,
    canDrop: PropTypes.bool.isRequired,
};

export default DayBlock;
