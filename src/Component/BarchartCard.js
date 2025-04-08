import '../Style/Card.css';
import '../App.css';
import React from 'react';

const BarChartCard = (props) => {
    const cardClassList = "card " + props.size;
    
    return(
        <div className={cardClassList}>
            {props.data}
        </div>
    )
}

export default React.memo(BarChartCard);