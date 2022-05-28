import React from 'react';

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
                    <li><a href="E:\Universidad Popular del Cesar\Moviles\salesma\src\main\resources\templates\products\listProducts.html"><i className="fas fa-tshirt"></i></a></li>
                    <li><a href="E:\Universidad Popular del Cesar\Moviles\salesma\src\main\resources\templates\products\listProducts.html"><i className="fas fa-home-alt"></i></a></li>
                    <li><a href="E:\Universidad Popular del Cesar\Moviles\salesma\src\main\resources\templates\products\listProducts.html"><i className="fas fa-shopping-bag"></i></a></li>
                    <li><a href="E:\Universidad Popular del Cesar\Moviles\salesma\src\main\resources\templates\products\listProducts.html"><i className="fas fa-chart-line"></i></a></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;
