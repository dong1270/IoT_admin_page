import '../../Style/DeviceList.css';
import '../../App.css';
import ContentsHeader from '../../Component/ContentsHeader';
import DeviceItem from '../../Component/DeviceItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

function DeviceList() {
    const [isDrag, setIsDrag] = useState(false);
    const [img, setImg] = useState(null);
    const [data, setData] = useState([]);

    const navigate = () => {
        window.location.href = "";
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'/device-list')
        .then(res => {
            setData(res.data)
        })
        .catch(err => {console.log(err)})
        
    }, [])

    const onDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.target.classList.add('modal-drag-enter');
        // setIsDrag(true);
    }

    const inCursor = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDrag(true);
    }

    const onDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setIsDrag(false);
        Object.values(event.target.classList).forEach(data => {
            if(data === 'modal-drag-enter') 
                event.target.classList.remove(data);
        })
        // setIsDrag(false);
        console.log(isDrag)
    }

    const onDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(event.dataTransfer.files)    setIsDrag(true);
    }

    const readImage = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            console.log(event.target)
            setImg(String(event.target?.result))
        }
        reader.readAsDataURL(file)
    }

    const onDrop = (event) => {
        event.preventDefault();
        console.log(event.dataTransfer.files[0])
        readImage(event.dataTransfer.files[0]);
        setIsDrag(false);
    }

    const onChange = (data) => {
        readImage(data.target.files[0]);
    }

    const uploadImg = async () => {
        const devName = document.getElementById('dev-name').value;
        const devType = document.getElementById('dev-type').value;

        await axios.post(process.env.REACT_APP_API_URL + "/add-device", {
            devName: devName,
            devType: devType,
            devIcon: img
        })
        .then(res => {
            if(res.data === "create err") alert("이미 등록된 기기입니다.");
            else {
                navigate();
            }
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    const addDev = () => {
        return(
            <div 
            className='add-dev-modal' 
            onDragOver={onDragOver}
            >
                {
                    isDrag ?
                    <div className='dev-modal-inner'>
                        <div 
                            className='modal-drag'
                            // onDragLeave={onDragLeave}
                            onDragEnter={onDragEnter} 
                            onDrop={onDrop}
                        > 
                            Drag & Drop photos here
                        </div>
                    </div>
                    :<div className='dev-modal-inner'>
                        <div>
                            <div 
                                className='dev-img-container'
                                id='img-upload'
                            >
                                {
                                    img !== null ? 
                                    <img src={img} alt='test' id='img-frame'></img>
                                    :
                                    <>
                                        장치 사진 선택 <br/>
                                        (사진을 올려 놔주세요.)
                                    </>
                                }
                            </div>

                            <form>
                                <label htmlFor='search' className='dev-img-search dev-img-search-lable'>
                                    파일 찾기 
                                </label>
                                <input onChange={onChange} id='search' accept=".png, .pneg, .jpg, .jpeg " type={'file'} webkitdirectory={true}/> 

                            </form>
                        </div>
                        <div className='space'></div>
                        <div className='dev-info-set'> 
                            <div>
                                장치 이름 : 
                                <input className='dev-input' id='dev-name' type='text'/>
                            </div>
                            <div>
                                장치 타입 :
                                <select className='dev-select' id='dev-type'>
                                    <option value="driver">driver</option>
                                    <option value="sensor">sensor</option>
                                </select>
                            </div>
                            <div className='save-btn-zone'>
                                <div className='dev-img-search save-btn' onClick={uploadImg}>
                                    저장
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            
        )
    }


    return (
        <div className='contents-view'>
            <ContentsHeader 
                title="장치 목록" 
                data={addDev}  
                modalTitle="장치 추가"
                useEdit={true}
                background={[inCursor, onDragLeave]}
                init={setImg}
            />
            <hr></hr>
            <div className='device-container'>
                <div className='device-box'>
                    {data.map((Data, index) => {
                        return (<DeviceItem data={Data} key={index} />)
                    })}
                </div>
            </div>
        </div>
    );
}

export default DeviceList;