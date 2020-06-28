import React, { useState } from 'react';
import ControlPanel from './ControlPanel/ControlPanel';
import DayBlock from './DayBlock/DayBlock';
import AddOperation from './AddOperation/AddOperation';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import RemoveArea from './RemoveArea/RemoveArea';
import { ItemTypes } from './ItemTypes';

const LIST = [
    {
        grow: true,
        name: 'ИП Бирюков Михаил Алексеевич',
        from: 'monobank',
        organization: 'Сайт Volkswagen',
        operation: 'Продвижение',
        description: 'Оплата за продвижение Google Adwords июнь-июль',
        paid: true,
        balance: '+21 239 ₴',
    },
    {
        grow: false,
        name: 'Роман Мельников',
        from: 'monobank',
        organization: 'ИП Eltron',
        operation: 'Зарплата сотрудникам',
        description: 'Аванс Июль',
        paid: true,
        balance: '-56 000 ₴',
    },
    {
        grow: true,
        name: 'ООО «Кранкомплект»',
        from: 'monobank',
        organization: 'Сайт Кранкомплект',
        operation: 'Разработка',
        description: 'Аванс за разработку',
        paid: true,
        balance: '+170 000 ₴',
    },
];

const TODAY = new Date();

const YESTERDAY = new Date();
YESTERDAY.setDate(TODAY.getDate() - 1);

const BEFORE_YESTERDAY = new Date();
BEFORE_YESTERDAY.setDate(YESTERDAY.getDate() - 1);

// имитируем что данные приходят в таком формате
const INITIAL_STATE = [
    {
        date: TODAY,
        list: [...LIST],
    },
    {
        date: YESTERDAY,
        list: [...LIST].reverse(),
    },
    {
        date: BEFORE_YESTERDAY,
        list: [...LIST],
    },
];

const OperationsHistory = () => {
    const [days, setDays] = useState(INITIAL_STATE);
    const [canDrop, setCanDrop] = useState(false);

    const removeOperation = (cardID, dayID) => {
        setDays((prevState) => {
            prevState[dayID].list.splice(cardID, 1);
            return [...prevState];
        });
        setCanDrop(false);
    };

    const copyOperation = (srcID, destID, cardID) => {
        setDays((prevState) => {
            const copyEl = prevState[srcID].list[cardID];
            prevState[destID].list.push(copyEl);
            return [...prevState];
        });
        setCanDrop(false);
    };

    const reorderOperation = (srcID, startIndex, endIndex) => {
        const result = [...days[srcID].list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        setDays((prevState) => {
            prevState[srcID].list = result;
            return [...prevState];
        });
        setCanDrop(false);
    };

    const updateDescription = (dayID, cardID, description) => {
        setDays((prevState) => {
            prevState[dayID].list[cardID] = {
                ...prevState[dayID].list[cardID],
                description,
            };
            return [...prevState];
        });
    };

    const moveOperation = (srcID, destID, droppableSource, droppableDestination) => {
        const sourceClone = [...days[srcID].list];
        const destClone = [...days[destID].list];
        const [removed] = sourceClone.splice(droppableSource, 1);
        destClone.splice(droppableDestination, 0, removed);

        setDays((prevState) => {
            prevState[srcID].list = sourceClone;
            prevState[destID].list = destClone;
            return [...prevState];
        });
        setCanDrop(false);
    };

    const getId = (id) => {
        return id.split('-')[1];
    };

    const getAction = (id) => {
        return id.split('-')[0];
    };

    const onDragStart = () => {
        setCanDrop(true);
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            setCanDrop(false);
            return;
        }

        const action = getAction(destination.droppableId);
        const srcID = getId(source.droppableId);
        const destID = getId(destination.droppableId);

        if (action === 'list') {
            if (srcID === destID) {
                reorderOperation(srcID, source.index, destination.index);
            } else {
                moveOperation(srcID, destID, source.index, destination.index);
            }
        } else if (action === 'copy') {
            copyOperation(srcID, destID, source.index);
        } else if (action === 'remove') {
            removeOperation(source.index, srcID);
        }
    };

    return (
        <React.Fragment>
            <ControlPanel />
            <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
                {days.map((day, index) => (
                    <DayBlock
                        key={`drop-list-${index}`}
                        updateDescription={updateDescription}
                        data={day}
                        id={index}
                        canDrop={canDrop}
                    />
                ))}
                <Droppable droppableId={`remove-1`} type={ItemTypes.OPERATION}>
                    {(provided, snapshot) => (
                        <RemoveArea
                            innerRef={provided.innerRef}
                            {...provided.droppableProps}
                            isOver={snapshot.isDraggingOver}
                            canDrop={canDrop}
                        />
                    )}
                </Droppable>
            </DragDropContext>
            <AddOperation />
        </React.Fragment>
    );
};

export default OperationsHistory;
