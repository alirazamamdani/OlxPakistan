import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../ui/olx-logo-vector.svg';

function Header() {
    return(
        <div className="header fixed flex aic">
            <div className="logo">
            <img src={Logo} alt="Olx Logo"/>
            </div>
            <div className="location">
                <div className="icon-search ico" />
                <input className="label s16 font" placeholder="Your Location" value="Pakistan"/>
                <button className="icon-chevron-down arrow"> </button>
                </div>
            <div className="search flex aic">
                <input type="text" placeholder="Find Cars, Mobile phones and more...." className="query"/>
                <button className="icon-search go"> </button>
            </div>
            <div className="actions flex aic">
                <Link to="/account/signin" className="fontb s16 noul">Sign in</Link>
                <button className="sell">
                    <div className="icon-plus" />
                    <h2 className="s16 font">Sell</h2>
                        
                </button>
            
            </div>

            </div>
        
    )
}


 export default Header;