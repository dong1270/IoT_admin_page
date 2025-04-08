import '../Style/MenuItem.css';
import '../App.css';
import { Link } from 'react-router-dom';

function MenuItem(props) {
  return (
    <Link to={props.link} className='link-box'>
      <div className='item-box'>
            <div className='item-icon'><img src={props.icon} alt='icons'/></div>
            <div className='item-name'>{props.item}</div>
      </div>
    </Link>
  );
}

export default MenuItem;
