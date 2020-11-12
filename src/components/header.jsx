import React,  {Component} from 'react';
<<<<<<< HEAD
import './css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

=======
import './css/header.css'
import FontAwesomeIcon from 'react-fontawesome'
import OlxLogo from '../images/olx-logo-vector.png';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
>>>>>>> 7d73d300f988891dbd5a58ad38632bbe73be9d44


class Header extends Component{
    render() {
        return(
<<<<<<< HEAD
          <div className="home-page">
            
          </div>    
=======
            <div className="head-container">
                <div className="head">
                    <img src={OlxLogo} className="logo" alt="olx-logo"/>
                    <FontAwesomeIcon icon={"fas-fa-search"}></FontAwesomeIcon>
                    <input type="text"/>
                </div>
            </div>
>>>>>>> 7d73d300f988891dbd5a58ad38632bbe73be9d44
        
      )
    } 
    
 }

 export default Header;