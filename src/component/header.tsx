import React from 'react';

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
                <button>Log In</button>
                <button className='subscribe'>
                    <span>Start Free Trial</span>
                    <img src='./src/assets/arrow.png' />
                </button>
            </div>
        </header>
    );
};

export default Header;


