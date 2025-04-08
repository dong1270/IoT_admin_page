import '../Style/Card.css';
import '../App.css';
import React from 'react';

const SensorCard = (props) => {

    return(
        <div className="card">
            {props.data}
        </div>
    )
}

export default React.memo(SensorCard);