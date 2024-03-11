import React from 'react';
import './index.css';

const NewTravel = ({ onClick }) => {
    return (
        <button className="new-travel-button" onClick={onClick} >
            +
        </button>
    );
};

export default NewTravel;
