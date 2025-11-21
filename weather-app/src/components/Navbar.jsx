import './Weather.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router';

export function NavBar() {
    return(
        <nav className="navbar">
            <div className='navdiv'>
            <img src={logo} alt="" width={40} />
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact' ><li>Contact</li></Link>
                <Link to='/weather' ><li>View weather</li></Link>
            </ul>
            </div>
        </nav>
    )
}