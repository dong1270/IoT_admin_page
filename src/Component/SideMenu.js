import '../Style/SideMenu.css';
import '../App.css';
import {useState} from 'react';
import MenuItem from './MenuItem';
import { removeCookie } from './Cookies';
import logoutIcon from '../Image/logout.svg';
import dashBoardIcon from '../Image/dash-board.svg';
import userIcon from '../Image/user.svg';
import detailIcon from '../Image/detail.svg';
import deviceIcon from '../Image/device.svg';
import reportIcon from '../Image/report.svg';
import logIcon from '../Image/log.svg';


function SideMenu() {
  const [clickFlag, setClickFlag] = useState(true);
  const navigate = () => {
    window.location.href = "";
  }

  const logout = () => {
    removeCookie("state");
    removeCookie("user-id");
    removeCookie("user-uid");
    removeCookie("user-name");
    removeCookie("user-role");
    navigate();
  }

  const clickMenuBtn = () => {
    const menuFrame = document.getElementsByClassName('menu');
    
    if(clickFlag === true) {
      menuFrame[0].classList.add('close-menu');
      setClickFlag(false);
    } else {
      menuFrame[0].classList.remove('close-menu');
      setClickFlag(true);
    } 
  }

  const itemArray = ["대시 보드",'사용자 관리', '세부데이터', '장치 목록 관리', '보고서', '로그'];
  const itemIcon = [
    dashBoardIcon,
    userIcon,
    detailIcon,
    deviceIcon,
    reportIcon,
    logIcon
  ];
  const itemLink = ["/", "/customer", "/detail-data", "/add-device", "/report", "/log"];

  return (
    <div className='menu-frame'>
        <div className='menu-head'>
          <div className='menu-btn'>
                <input type='checkbox' id="icon" onClick={clickMenuBtn}/>
                <label htmlFor="icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className='menu-text view-text'>메뉴</div>
        </div>
        {itemArray.map((item, index) => {
          return(<MenuItem item={item} key={index} link={itemLink[index]} icon={itemIcon[index]}/>);
        })
        }

        <div className='log-out'>
          <div className='logout-box'>
            <div className='logout-icon'>
              <img onClick={logout} src={logoutIcon} alt='logout img'/>
            </div> 
          </div>
        </div>
    </div>
  );
}

export default SideMenu;
