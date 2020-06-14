import React from 'react';
import Diagram from './Diagram/Diagram';
import OperationsHistory from './OperationsHistory/OperationsHistory';
import './Main.scss';

const Main = () => {
    return (
        <div className="main w-full">
            <div className="py-24 relative min-h-screen">
                <Diagram />
                <OperationsHistory />
            </div>
        </div>
    );
};
export default Main;
