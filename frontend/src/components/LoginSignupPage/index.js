// import { useState } from "react";
// import { useSelector } from "react-redux";
// import * as sessionActions from '../../store/session'
import * as modalActions from '../../store/modal'
import { useDispatch } from 'react-redux'

function LoginSignupPage () {
    const dispatch = useDispatch()
    // const sessionUser = useSelector(state => state.session.user)
        return (
            <div  onClick={
                () => dispatch(modalActions.addModal({LoginSignupPage}))
            }>Login/Signup</div>
        )
}

export default LoginSignupPage