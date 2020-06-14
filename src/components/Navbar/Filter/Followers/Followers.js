import React, { useState } from 'react';
import Follower from './Follower/Follower';
import Icon from '../../../Icon/Icon';
import './Followers.scss';

const INITIAL_STATE = [
    {
        avatar: '/path/to/img',
        vip: true,
    },
    {
        avatar: '/path/to/img',
        vip: true,
    },
    {
        avatar: '/path/to/img',
        vip: false,
    },
    {
        avatar: '/path/to/img',
        vip: true,
    },
];

const Followers = () => {
    const [followers] = useState(INITIAL_STATE);
    return (
        <div className="followers flex items-center px-2">
            {followers.map((follower, index) => (
                <Follower
                    key={`key-follower-${index}-${Date.now()}`}
                    avatar={follower.avatar}
                    vip={follower.vip}
                />
            ))}
            <button className="followers__btn rounded-full mx-1 focus:outline-none inline-flex items-center justify-center bg-gray-100 fill-b2 hover:fill-current">
                <Icon name="plus-icon" width="10px" height="10px" />
            </button>
        </div>
    );
};

export default Followers;
