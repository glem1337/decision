import React, { useState } from 'react';
import ControlPanel from './ControlPanel/ControlPanel';
import DayBlock from './DayBlock/DayBlock';
import AddOperation from './AddOperation/AddOperation';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import RemoveArea from './RemoveArea/RemoveArea';

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

    const removeOperation = (cardID, dayID) => {
        setDays((prevState) => {
            prevState[dayID].list.splice(cardID, 1);
            return [...prevState];
        });
    };

    const copyOperation = (to, from, cardID) => {
        setDays((prevState) => {
            const copyEl = prevState[from].list[cardID];
            prevState[to].list.push(copyEl);
            return [...prevState];
        });
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

    return (
        <React.Fragment>
            <ControlPanel />
            <DndProvider backend={HTML5Backend}>
                {days.map((day, index) => (
                    <DayBlock
                        removeOperation={removeOperation}
                        copyOperation={copyOperation}
                        updateDescription={updateDescription}
                        data={day}
                        id={index}
                        key={`day-block-${index}`}
                    />
                ))}
                <RemoveArea />
            </DndProvider>
            <AddOperation />
        </React.Fragment>
    );
};

export default OperationsHistory;
