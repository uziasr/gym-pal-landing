import React from 'react';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="title">
                <p>Gym Pal</p>
            </div>
            <div className="links">
                <a href="home">Home</a>
                <a>About</a>
            </div>
        </div>
    );
};

export default NavBar;