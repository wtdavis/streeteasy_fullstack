// import { useState } from "react";
// import { useSelector } from "react-redux";
// import * as sessionActions from '../../store/session'
import * as modalActions from '../../store/modal'
import { useDispatch } from 'react-redux'
import './navigation.css'

function LoginSignupButton () {
    
    const dispatch = useDispatch()
    // const sessionUser = useSelector(state => state.session.user)
        return (
            <div id="loginsignupbutton" onClick={
                () => dispatch(modalActions.addCredentialModal())
            }>
                Login/Signup
            </div>
        )
}

export default LoginSignupButton