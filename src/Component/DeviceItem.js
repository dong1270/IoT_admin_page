import '../Style/DeviceItem.css';
import '../App.css';
import React from 'react';
import axios from 'axios';

const DeviceItem = (props) => {
    const data = props.data;

    const navigate = () => {
        window.location.href = "";
    }

    const delDevice = async () =>
    {
        console.log()
        await axios.delete(process.env.REACT_APP_API_URL + "/del-device", {
            params: {
                devId   : data.device_id
            }
        }
        )
        .then(res => {
            if (res.data === "del") {
                alert('기기가 삭제되었습니다.');
            }
            else {
                alert('기기 삭제 과정에서 문제가 발생하였습니다.');
            }
            navigate();
        })
        .catch(err => { 
            console.log(err);
        })
    }

    return(
        <div className='device-item'>
            <div className='device-img-frame'>
                <img src={data.device_icon} className='deivce-img' />
            </div>
            <div className='device-contents'>
                <div className='device-name'>
                    {data.device_name}
                </div>
                <div className='device-type'>
                    {data.device_type}
                </div>
                <div className='device-btn-zone'>
                    <div className='device-del' onClick={delDevice}>삭제</div>
                </div>
            </div>
        </div>
    )
}

export default DeviceItem;