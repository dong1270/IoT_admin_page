import '../../App.css';
import '../../Style/Main.css';
import { Route, Routes } from 'react-router-dom';
import SideMenu from '../../Component/SideMenu';
import OverView from '../OverView/OverView';
import Customer from '../Customer/Customer';
import DataDetail from '../DataDetail/DataDetail';
import ReportView from '../ReportView/ReportView';
import LogView from '../LogView/LogView';
import DeviceList from '../DeviceList/DeviceList';

function Main() {
  return (
    <div className='main'>
      <div className='menu'>
        <SideMenu/>
      </div>
      <div className='container'>
        <Routes>
          <Route path='/' element={<OverView/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/detail-data' element={<DataDetail/>}/>
          <Route path='/report' element={<ReportView/>}/>
          <Route path='/log' element={<LogView/>} />
          <Route path='/add-device' element={<DeviceList/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
