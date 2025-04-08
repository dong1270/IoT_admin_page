import '../../App.css';
import '../../Style/ReportView.css'
import ContentsHeader from '../../Component/ContentsHeader';
import ReportItem from '../../Component/ReportItem';
// import { useState } from 'react';

const testDate = [
  {
    reportName: "sensor-report01.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report02.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report03.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report04.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report05.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report02.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report03.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report04.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report05.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report02.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report03.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report04.log",
    date: "2025-03-30 18:25",
  },
  {
    reportName: "sensor-report05.log",
    date: "2025-03-30 18:25",
  }
]

function ReportView(props) {


  return (
    <div className='contents-view'>
      <ContentsHeader title="Report View" data="Report View test" useEdit={true}/>
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

export default ReportView;
