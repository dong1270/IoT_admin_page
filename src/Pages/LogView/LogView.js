import '../../App.css';
import '../../Style/ReportView.css'
import ContentsHeader from '../../Component/ContentsHeader';
import ReportItem from '../../Component/ReportItem';
// import { useState } from 'react';

const testDate = [
  {
    reportName: "sensor-err01.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err02.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err03.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err04.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err05.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err02.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err03.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err04.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err05.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err02.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err03.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err04.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-err05.log",
    date: "2025-03-30 18:25",
  }
]

function LogView(props) {


  return (
    <div className='contents-view'>
      <ContentsHeader title="Log View" data="Log View test" useEdit={true}/>
      <div className='option-var'>
        <div className='sort-btn'>정렬</div>
      </div>
      <div className='t-head'>
        <div className='list-num'>
          no.
        </div>
        <div className='list-name'>
          | 이름
        </div>
        <div className='list-date'>
          | Date.
        </div>
        <div className='list-del'>
          | 삭제
        </div>
      </div>
      <div className='contents-item'>
        {
            testDate.map((data, index) => {
            return (<ReportItem key={index} index={index} data={data}/>)
            })
        }
      </div>
    </div>
  );
}

export default LogView;
