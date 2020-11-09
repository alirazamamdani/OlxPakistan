import React,  {Component} from 'react';
import './css/header.css'
import FontAwesomeIcon from 'react-fontawesome'
import OlxLogo from '../images/olx-logo-vector.png';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 


class Header extends Component{
    render(props) {
        return(
            <div className="head-container">
                <div className="head">
                    <img src={OlxLogo} className="logo" alt="olx-logo"/>
                    <FontAwesomeIcon icon={"fas-fa-search"}></FontAwesomeIcon>
                    <input type="text"/>
                </div>
            </div>
        
      )
    } 
    
 }

 export default Header;