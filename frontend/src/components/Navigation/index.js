import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session'
import './navigation.css'
import LoginSignupButton from "./LoginSignupButton.js";
import NavBar from "./NavBar";
import DropDown from "./DropDown";
import LoginSignupPage from "../LoginSignupPage";
import LogoutButton from "./LogoutButton";
import AccountDropdown from "./AccountDropdown";
import SocialLinks from "./SocialLinks";
import BannerLinks from "./BannerLinks";
import { useState } from "react";

function Navigation (navClass) {
    const sessionUser = useSelector(state => state.session.user)
    // const [mouseoverValue, setMouseoverValue] = useState()

return (
    
    
    <div id="header" className={navClass}>

    
        <header className="navbanner">
            <ProfileButton/>
            <BannerLinks/>
            
        </header>

        <header className="navlinkbar">
            <NavBar />
        </header>
        <DropDown />

        {/* <div id="banner">            
            <LoginSignupPage/>
            {!sessionUser && <LoginSignupButton/>}
            {sessionUser&& <AccountDropdown/>}
            <SocialLinks/>
            </div>
        <div id="navcontainer" className={navClass}>
        </div> */}
        
    </div>
    
    
    
    )
}

export default Navigation

