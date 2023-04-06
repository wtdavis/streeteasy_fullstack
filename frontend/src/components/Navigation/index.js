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

function Navigation () {
    const sessionUser = useSelector(state => state.session.user)
return (
    <div id="header">
            <LoginSignupPage/>
        <div id="banner">            
            <ProfileButton/>
            {!sessionUser && <LoginSignupButton/>}
            {sessionUser&& <AccountDropdown/>}
            </div>
        <div id="navcontainer">
            <NavBar/>
        </div>
        
    </div>
    
    
    
    )
}

export default Navigation

