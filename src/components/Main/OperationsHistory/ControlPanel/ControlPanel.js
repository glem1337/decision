import React from 'react';
import Group from './Group/Group';
import View from './View/View';
import Tabs from './Tabs/Tabs';
import './ControlPanel.scss';

const ControlPanel = () => {
    return (
        <div className="control-panel flex items-center">
            <Group />
            <div className="ml-6">
                <View />
            </div>
            <div className="ml-auto">
                <Tabs />
            </div>
        </div>
    );
};

export default ControlPanel;
