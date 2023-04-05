import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session'
import './navigation.css'
import LoginSignupPage from "../LoginSignupPage";
import NavBar from "./NavBar";

function Navigation () {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
return (
    <div id="banner">
        <div id="logo-div">
            <ProfileButton/>
        </div>

        <div id="loginsignup">
            <LoginSignupPage/>
        </div>

        {sessionUser&& 
        <div onClick={(e) => {
            dispatch(sessionActions.logout())
        }}>
            Logout
        </div>}
        <div id="navcontainer">
            <NavBar/>
        </div>
    </div>
    
    
    
    )
}

export default Navigation

{/* <NavLink to="/login">Login</NavLink>
<NavLink to="/signup">Signup</NavLink> */}