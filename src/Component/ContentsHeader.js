import '../App.css';
import '../Style/Customer.css';
import Modal from '../Component/Modal';
import { useState } from 'react';
import alretImg from '../Image/alret.svg';
import editImg from '../Image/edit.png';

function ContentsHeader(props) {
  const [modalState, setModalState] = useState(false); 
  const edit = props.useEdit;
  
  let modalSwitch = () => {
      if(modalState) setModalState(false);
      else setModalState(true);
  }

  return (
    <div className='contents-header'>
        <div className='contents-title'> {props.title} </div>
        <div className='icon-box'>
            {edit ? <div className='edit' onClick={modalSwitch}> <img src={editImg} alt='edit img'></img> </div> : <div className='edit-none'></div>}
            <div className='my-alret'> <img src={alretImg} alt='alert img'></img> </div>
        </div>
        {modalState ? <Modal state={modalSwitch} data={props.data}/> : null}
    </div>
);
}

export default ContentsHeader;
