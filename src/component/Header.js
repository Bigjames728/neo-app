import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        
        return (
            <header>
                <div className="wrap header--flex">
                    <h1 className="header--logo">
                        <Link to="/">Asteroids</Link>
                    </h1>
                    <nav>
                        <ul className="header--signedout">
                            {
                                <React.Fragment>
                                    <li><Link to="/signup">Sign Up</Link></li>
                                    <li><Link to="/signin">Sign In</Link></li>
                                </React.Fragment>
                            }
                        </ul>
                    </nav>
                </div> 
            </header>
        )
    }
}

export default Header;