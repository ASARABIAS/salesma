import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <div className="header-top">
            <div className="header-letf">
                <h1>Salesma</h1>
            </div>
            <div className="header-right">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div className="header-bottom">
            <nav className="menu">
                <ul>
                    <li><Link to='/products' ><i className="fas fa-tshirt"></i></Link></li>
                    <li><Link to='/'><i className="fas fa-home-alt"></i></Link></li>
                    <li><Link to='/shopping'><i className="fas fa-shopping-bag"></i></Link></li>
                    <li><Link to='/chart'><i className="fas fa-chart-line"></i></Link></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;
