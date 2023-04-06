import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session'
import './navigation.css'
import LoginSignupButton from "./LoginSignupButton.js";
import NavBar from "./NavBar";
import DropDown from "./DropDown";
import LoginSignupPage from "../LoginSignupPage";

function Navigation () {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
return (
    <div id="header">

        <div id="banner">
            
                <ProfileButton/>
                <LoginSignupButton/>
            

            {sessionUser&& 
            <div onClick={(e) => {
                dispatch(sessionActions.logout())
            }}>
                Logout
            </div>}
        </div>

        <div id="navcontainer">
            <NavBar/>
            {/* <DropDown/> */}
            
        </div>
        
    </div>
    
    
    
    )
}

export default Navigation

{/* <NavLink to="/login">Login</NavLink>
<NavLink to="/signup">Signup</NavLink> */}