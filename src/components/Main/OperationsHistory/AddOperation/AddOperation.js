import React from 'react';
import Icon from '../../../Icon/Icon';
import './AddOperation.scss';

const AddOperation = () => {
    return (
        <button className="add-operation focus:outline-none hover:bg-primary-500 fill-white bg-gray-1200 flex justify-center items-center fixed rounded-full">
            <Icon name="plus-icon" width="14px" height="14px" />
        </button>
    );
};

export default AddOperation;
