import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import './loginsignup.css'
import * as sessionActions from '../../store/session'
import * as modalActions from '../../store/modal'
function LoginSignupModal () {
    
    const [credential, setCredential] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const credentialModal = useSelector(state=> state.modal.credential)
    const passwordModal = useSelector(state => state.modal.password)

    const handleCredential= (e) => {
        e.preventDefault();
        dispatch(modalActions.addPasswordModal())
        dispatch(modalActions.removeCredentialModal())
        // dispatch(sessionActions.login())----------
    }
    const handlePassword = (e) => {
        e.preventDefault()
        dispatch(modalActions.removeModals())
    }

    if (credentialModal) 
    {  return (
        <div id="credentialmodal" className="loginmodal">
            <p className="modalprompt"> Enter Username or Email</p>
            <p className="modalflavor">to find an apartment you can't afford</p>
        <form>
            <input type="text" value={credential} onChange={(e) =>setCredential(e.target.value)}/>
            {/* <button type="submit">Submit</button> */}
        </form>
            <div className="formsubmit" onClick={handleCredential}>
                Submit
            </div>
        </div>
        )
    } else if (passwordModal) {
        return (
            <div id="passwormModal" className="loginmodal">
            <p className="modalprompt"> Enter Your Password</p>
            <p className="modalflavor">so I can sell your information</p>
        <form>
            <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        </form>
        <div className="formsubmit" onClick={handlePassword}>
                Login
            </div>
        </div>
        )

    }
}

export default LoginSignupModal