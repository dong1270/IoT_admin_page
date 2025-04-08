import '../../App.css';
import '../../Style/Customer.css';
import UserDropInfo from '../../Component/UserDropInfo';
import ContentsHeader from '../../Component/ContentsHeader';

const testDate = [
  {
    name: "이름 1",
    userId: "아이디 1",
  },
  {
    name: "이름 2",
    userId: "아이디 2",
  },
  {
    name: "이름 3",
    userId: "아이디 3",
  },
  {
    name: "이름 4",
    userId: "아이디 4",
  },
  {
    name: "이름 5",
    userId: "아이디 5",
  },
  {
    name: "이름 2",
    userId: "아이디 2",
  },
  {
    name: "이름 3",
    userId: "아이디 3",
  },
  {
    name: "이름 4",
    userId: "아이디 4",
  },
  {
    name: "이름 5",
    userId: "아이디 5",
  },
  {
    name: "이름 2",
    userId: "아이디 2",
  },
  {
    name: "이름 3",
    userId: "아이디 3",
  },
  {
    name: "이름 4",
    userId: "아이디 4",
  },
  {
    name: "이름 5",
    userId: "아이디 5",
  }
]

function Customer() {

  return (
    <div className='contents-view'>
        <ContentsHeader title="사용자 관리" data="Customer test" useEdit={true}/>
        <div className='option-var'>
          <div className='sort-btn'>정렬</div>
        </div>
        <div className='customer-container contents-item'>
          {
            testDate.map((data, index) => {
              return (<UserDropInfo data={data} kNum={index} key={index}/>)
            })
          }
        </div>
    </div>
);
}

export default Customer;
