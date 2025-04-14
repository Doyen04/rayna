import React from 'react';
import Subscribe from './subscribe';

const Header: React.FC = () => {
    return (
        <header className='header'>

            <img className='logo-box' src="./src/assets/main-logo.png" alt="" />
            <nav className='nav-links'>
                <div>About Us </div>
                <div>Products <img src="./src/assets/caret.png" alt="" /></div>
                <div>Pricing </div>
                <div>Resources <img src="./src/assets/caret.png" alt="" /></div>
                <div>FAQs</div>
            </nav>
            <div className='call-to-action'>
                <button className='login'>Log In</button>
                <Subscribe />
            </div>
        </header>
    );
};

export default Header;


