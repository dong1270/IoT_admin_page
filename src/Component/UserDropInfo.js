import '../App.css';
import '../Style/UserDropInfo.css';
import UserInfo from './UserInfo';
import { useState } from 'react';

function UserDropInfo(props) {
  const udName = "dr"+ props.kNum;
  const diName = "di"+ props.kNum;
  const target = document.getElementsByName(udName);
  const diTarget = document.getElementsByName(diName);
  const openBox = "drop-info-open";
  const closeBox = "drop-info-close"
  const offDrop = 'drop-icon-uncheck';
  const onDrop = 'drop-icon-check';
  const [isOpen, setIsOpen] = useState(false);

  const isCheck = () => {
    if(isOpen) {
      target[0].classList.add(offDrop);
      target[0].classList.remove(onDrop);
      diTarget[0].classList.add(closeBox);
      diTarget[0].classList.remove(openBox);
      setIsOpen(false);
    }
    else {
      target[0].classList.add(onDrop);
      target[0].classList.remove(offDrop);
      diTarget[0].classList.add(openBox);
      diTarget[0].classList.remove(closeBox);
      setIsOpen(true);
    }   
  }

  return (
    <div className='drop-wrapper'>
      <div className='drop-info drop-info-close' name={diName}>
        <div className='name-box'>
          {props.data.name}
        </div>
        <div className='id-box'>
          {props.data.userId}
        </div>
        <div className='drop-icon drop-icon-uncheck' name={udName} onClick={isCheck} >
          <span></span>
          <span></span>
        </div>
      </div>
      {isOpen ? <UserInfo/> : null}

    </div>
  );
}

export default UserDropInfo;
