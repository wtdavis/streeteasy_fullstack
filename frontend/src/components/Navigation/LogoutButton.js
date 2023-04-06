import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
function LogoutButton () {
    const dispatch = useDispatch()

    return (
        <div id="logoutbutton" onClick={(e)=> dispatch(sessionActions.logout())}> Logout </div>
    )
}

export default LogoutButton