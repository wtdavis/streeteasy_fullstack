import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session'
import { Redirect } from "react-router-dom";

function LoginFormPage () {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to="/"/>

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([])
        
        return dispatch(sessionActions.login({credential, password}))
        .catch(async (res) => {let data;
        try {
            data = await res.clone().json();
        } catch {
            data = await res.text()
        }
        if (data?.errors) {setErrors(data.errors)}
        else if (data) {setErrors([data])}
        else setErrors([res.statusText])
        
    })
        
    }

    return (
        <>
        
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
        <form onSubmit={handleSubmit}>
            <label> Username or Email
                <input name="credential" type="text" value={credential} onChange={(e) => setCredential(e.target.value)} required/>
            </label>
            <label> Password
                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <input type="submit"/> Log In
        </form>
        </>
    )
}

export default LoginFormPage