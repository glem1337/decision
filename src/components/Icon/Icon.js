import React from 'react';
import sprite from './sprite.svg';
import PropTypes from 'prop-types';

const Icon = ({ name, width, height }) => {
    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <use xlinkHref={`${sprite}#${name}`} />
        </svg>
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Icon;
