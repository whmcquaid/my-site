import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className= 'footer'>
        <span>
          <Link to= '/'>  Home  </Link>
          <Link to='/Projects'>  Projects  </Link>
          <Link to= '/About'>  About Me  </Link>
          <Link to= '/Contact'>  Contact  </Link>
        </span>
      </div>
    );
};

export default Footer;