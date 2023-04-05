import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as sessionActions from '../../store/session'
import { Redirect } from "react-router-dom"

function SignupFormPage () {
    const sessionUser = useSelector(state => state.session.user)
const [username, setUsername] = useState("") 
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [errors, setErrors] = useState()
const [confirmPassword, setConfirmPassword] = useState("")
const dispatch = useDispatch()

if (sessionUser) {return <Redirect to="/"/>} 
const handleSubmit = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
        setErrors([]);
        return dispatch(sessionActions.signup({username, email, password}))
        .catch(async (res) => {
            let data;
            try {
                data = await res.clone().json()
            } catch {
                data = await res.text()
            }
            if (data?.errors) {
                setErrors(data.errors)
            } else if ( data) {
                setErrors([data])
            } else {
                setErrors([res.statusText()])
            }
        })
    }
    return setErrors(['password confirmation must match'])
}


    return (
        <form onSubmit={handleSubmit}>
            <label> Username
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label> Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>Password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>Password
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
                <button type="submit">Submit</button>
        </form>
    )
}

export default SignupFormPage