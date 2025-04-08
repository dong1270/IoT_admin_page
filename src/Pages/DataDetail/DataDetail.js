import '../../App.css';
import '../../Style/Customer.css';
import DataDropInfo from '../../Component/DataDropInfo';
import ContentsHeader from '../../Component/ContentsHeader';

const testDate = [
  {
    name: "모듈 1",
    type: "type 1",
  },
  {
    name: "모듈 2",
    type: "type 2",
  },
  {
    name: "모듈 3",
    type: "type 3",
  },
  {
    name: "모듈 4",
    type: "type 4",
  },
  {
    name: "모듈 5",
    type: "type 5",
  }
]

function DataDetail() {

  return (
    <div className='contents-view'>
        <ContentsHeader title="세부 데이터" data="Data Detail test" useEdit={false}/>
        <div className='customer-container'>
          <div className='option-var'>
            <div className='sort-btn'>정렬</div>
          </div>
          <div className='contents-item'>
            {
              testDate.map((data, index) => {
                return (<DataDropInfo data={data} kNum={index} key={index}/>)
              })
            }
          </div>
        </div>
    </div>
);
}

export default DataDetail;