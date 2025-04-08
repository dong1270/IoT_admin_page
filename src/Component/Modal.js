import '../Style/Modal.css';
import '../App.css';

function Modal(props) {
    return (
        <div className='modal-background'>
            <div className='modal-frame'>
                <div className='modal-header'>
                    <div className='modal-close' onClick={props.state}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {props.data}
            </div>
        </div>
    );
}

export default Modal;
