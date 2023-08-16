import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import './loginsignup.css'
import * as sessionActions from '../../store/session'
import * as modalActions from '../../store/modal'
import { Link } from "react-router-dom"
function LoginSignupModal () {
    
    const dispatch = useDispatch()

    const [credential, setCredential] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState("")
    
    const credentialModal = useSelector(state => state.modal.credential)
    const passwordModal = useSelector(state => state.modal.password)
    const signupModal = useSelector(state => state.modal.signup)

    const demoUser = async () => {
        // setCredential("demo@demo.com")
        // setPassword("password")
        dispatch(sessionActions.login({credential: "demo@demo.com", password: "password"}))
        // dispatch(sessionActions.signup({credential: "demo@demo.com", password: "password"}))
        dispatch(modalActions.removeModals())
    }

    const clearFields = () => {
        setCredential("")
        setPassword("")
        setPasswordConfirmation("")
    }

    const handleCredential= (e) => {
        e.preventDefault();
        
        dispatch(modalActions.addPasswordModal())
        dispatch(modalActions.removeCredentialModal())
    }
    
    const handlePassword = async (e) => {
        e.preventDefault()
        let res = await dispatch(sessionActions.login({credential, password}))

        if (!(res.ok)) {
            setErrors("Invalid Credentials")
        } else {
            dispatch(modalActions.removeModals())
            clearFields()
        }

    }

    const handleSignup = async (e) => {
        e.preventDefault()
        if (password !== passwordConfirmation){
            setErrors("Passwords must match")
        } else {
        let res = await dispatch(sessionActions.signup({credential, password}))
        if (!res.ok) {
            setErrors("Could not create User")
        } else {
            dispatch(modalActions.removeModals())
        }
        clearFields()
    }
    }
    
    const signUp = () => {
        setErrors("")
        dispatch(modalActions.removeModals())
        dispatch(modalActions.addSignupModal())
    }

    const handleClose = () => {
        setErrors("")
        clearFields()
        dispatch(modalActions.removeModals())
    }

    if (credentialModal) 
    {  return (
        <>
            <div id="modalbackground" 
                style={{height: window.innerHeight, width: window.innerWidth, top: 0, left: 0}} 
                onClick={e => dispatch(modalActions.removeModals())}>
            </div>
            <div id="credentialmodal" className="loginmodal">
                    <div id="closeButton" onClick={handleClose}>X</div>
                    <p className="modalprompt">  Email</p>
                    <p className="modalflavor">to find an apartment you can't afford</p>
                    <form className="inputform" onSubmit={handleCredential}>
                        <input placeholder="username" classname="forminput" type="text" value={credential} onChange={(e) =>setCredential(e.target.value)}/>
                    </form>
                    <div className="formsubmit" onClick={handleCredential}x>
                        Submit
                    </div>
                    <Link to="/" onClick={demoUser}> Demo User!</Link>
                    <div onClick={signUp}> or Sign Up!</div>
                </div>
        
        </>
        )
    } else if (passwordModal) {
        return (
            <>
                <div id="modalbackground" 
                    style={{height: window.innerHeight, width: window.innerWidth, top: 0, left: 0}}
                    onClick={e => dispatch(modalActions.removeModals())}>
                </div>
                <div id="passwordModal" className="loginmodal">
                <div id="closeButton" onClick={handleClose}>X</div>
                <p className="modalprompt"> Enter Your Password</p>
                <p className="modalflavor">so we can sell your information</p>
                <form className="inputform" onSubmit={handlePassword}>
                    <input className="forminput" type="password" placeHolder="password" value={password} onChange={(e) => {setPassword(e.target.value); setErrors("")}}/>
                </form>
                <div className="loginerrors">{errors} </div>
                <div className="formsubmit" onClick={handlePassword}>
                    Login
                </div>
                <div onClick={signUp}> or Sign Up</div>

                </div>
            </>
        )

    } else if (signupModal) {
        return (
            <>
                <div id="modalbackground" 
                    style={{height: window.innerHeight, width: window.innerWidth, top: 0, left: 0}}
                    onClick={e => dispatch(modalActions.removeModals())}>
                </div>
                <div id="passwordModal" className="loginmodal">
                <div id="closeButton" onClick={handleClose}>X</div>
                <p className="modalprompt"> Enter your email and password</p>
                <form onSubmit={handleSignup}>
                    <input placeholder="username" className="forminput" type="text" value={credential} onChange={(e) => {setCredential(e.target.value); setErrors("")}}/>
                    <input className="forminput" type="password" placeHolder="password" value={password} onChange={(e) => {setPassword(e.target.value); setErrors("")}}/>
                    <input className="forminput" type="password" placeHolder="confirm password" value={passwordConfirmation} onChange={(e) => {setPasswordConfirmation(e.target.value); setErrors("")}}/>
                </form>
                <div className="loginerrors">{errors} </div>
                <div className="formsubmit" onClick={handleSignup}>
                    Sign Up!
                </div>
            </div>
        </>
        )
    } 
}

export default LoginSignupModal