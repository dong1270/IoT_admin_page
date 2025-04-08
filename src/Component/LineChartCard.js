import '../Style/Card.css';
import '../App.css';
import React from 'react';

const LineChartCard = (props) => {
    const cardClassList = "card " + props.size;
    
    return(
        <div className={cardClassList}>
            {props.data}
        </div>
    )
}

export default React.memo(LineChartCard);