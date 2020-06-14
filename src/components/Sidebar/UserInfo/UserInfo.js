import React from 'react';
import avatar from '../../../assets/images/avatar.png';
import Icon from '../../Icon/Icon';
import './UserInfo.scss';

const UserInfo = () => {
    return (
        <div className="user-info bg-gray-400 rounded-lg flex items-center">
            <img className="rounded-full h-10 w-10 mr-3" src={avatar} alt="avatar" />
            <div className="text-md">
                <div className="font-medium">Сергей Василенко</div>
                <div className="opacity-75">Newage Systems</div>
            </div>
            <div className="ml-auto flex flex-col">
                <button className="focus:outline-none hover:opacity-50 mb-3">
                    <Icon name="settings-icon" width="16" height="16" />
                </button>
                <button className="focus:outline-none hover:opacity-50">
                    <Icon name="help-icon" width="16" height="16" />
                </button>
            </div>
        </div>
    );
};
export default UserInfo;
