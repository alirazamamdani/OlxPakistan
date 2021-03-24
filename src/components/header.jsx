import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/olx-logo-vector.svg';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header() {

    const nav = [
        {ID : 1 , label: "Mobile Phones"},
        {ID : 2 , label: "Cars"},
        {ID : 3 , label: "Motorcyles"},
        {ID : 4 , label: "Houses"},
        {ID : 5 , label: "TV-Video-Audio"},
        {ID : 6 , label: "Tablets"},
        {ID : 7 , label: "Land & Plots"},
    ]
    return(
        <React.Fragment>
            <div className="header fixed flex aic">
            <div className="logo">
            <img src={Logo} alt="Olx Logo"/>
            </div>
            <div className="location rel flex aic">
                <div className="icon-search s20 ico" />
                <FontAwesomeIcon icon={faSearch} />
                <input className="label s18 font" placeholder="Your Location" value="Pakistan"/>
                <FontAwesomeIcon className="arrow s20" icon={faChevronDown} />
                {/* <button className="icon-chevron-down arrow s20"></button> */}
              
                </div>
            <div className="search flex aic">
                <input type="text" placeholder="Find Cars, Mobile phones and more...." className="query s20 "/>
                <button className="icon-search go f20 s28 cfff" > </button>
            </div>
            <div className="actions flex aic">
                <Link to="/account/signin" className="fontb color s16 noul noulh">Sign in</Link>
                <button className=" color sell flex aic">
                    <div className="icon-plus ico s24" />
                    <h2 className="s18 font1 ">Sell</h2>
                </button>
            
            </div>
            </div>
          
            
            <div className="hnav fixed flex aic">
            <button className="view-cates flex aic color">
            <h2 className="s18 font ">All Category</h2>
                <button className="icon-chevron-down arrow s20"></button>
            </button>
            {
                nav.map(item => {
                    return(
                    <Link to={"/browser/" + item.ID} className="noul color font s16">{item.label}</Link>
                    )
                })
            }
            
            </div>
            <div className="hclr"></div>
            
            </React.Fragment>
        
                
    )
}


 export default Header;