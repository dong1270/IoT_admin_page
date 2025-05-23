import '../Style/Modal.css';
import '../App.css';

function Modal(props) {
    const onClick = () => {
        props.state();
        if(props.init !== null) props.init(null);
    }
    return (
        <div className='modal-background'
        
        onDragLeave={props.background[1]}
        >
            <div 
                className='modal-frame'
                onDragOver={props.background[0]}
            >
                <div className='modal-header'>
                    <div className='modal-title'>{props.modalTitle}</div>
                    <div className='modal-close' onClick={onClick}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {props.data()}
            </div>
        </div>
    );
}

export default Modal;
