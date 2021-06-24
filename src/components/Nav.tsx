
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <div className= 'Nav-container'>
          <nav>
              <ul>
                  <li>
                      <Link to= '/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/Projects'>Projects</Link>
                  </li>
                  <li>
                      <Link to= '/About'>About Me</Link>
                  </li>
                  <li>
                      <Link to= '/Contact'>Contact</Link>
                  </li>
              </ul>
          </nav>
          </div>
        </>
    );
};
export default Nav;