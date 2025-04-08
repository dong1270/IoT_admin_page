import '../Style/ReportItem.css';
import '../App.css';
import { useState } from 'react';
import Modal from './Modal';

function ReportItem(props) {
    const index = props.index;
    const data = props.data;
    const [isClick, setIsClick] = useState(false);


    const isOpen = () => {
        if(isClick) setIsClick(false);
        else setIsClick(true);
    };

    return (
        <div className='report-item'>
            <div className='select-item' onClick={isOpen}>
                <div className='report-num'>
                    {index + 1}
                </div>
                <div className='report-name'>
                    {data.reportName}
                </div>
                <div className='report-date'>
                    {data.date}
                </div>
            </div>
            <div className='report-del'>
                <input type='checkbox'></input>
            </div>
            {isClick ? <Modal state={isOpen} data={data.reportName}/> : null}
        </div>
    );
}

export default ReportItem;
