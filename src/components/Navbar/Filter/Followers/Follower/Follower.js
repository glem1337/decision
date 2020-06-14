import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../../../../assets/images/avatar.png';
import Icon from '../../../../Icon/Icon';
import './Follower.scss';

const Follower = ({ avatar, vip }) => {
    return (
        <div className="follower relative">
            {vip && (
                <span className="absolute">
                    <Icon name="favorite" width="12" height="12" />
                </span>
            )}
            <img
                className="follower__image rounded-full mx-1"
                src={avatar || defaultAvatar}
                alt="image"
                onError={(e) => {
                    e.target.src = defaultAvatar;
                }}
            />
        </div>
    );
};

Follower.propTypes = {
    avatar: PropTypes.string.isRequired,
    vip: PropTypes.bool,
};

export default Follower;
