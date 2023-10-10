import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import { Link } from 'react-router-dom'
function LogoutButton () {
    const dispatch = useDispatch()

    return (
        <Link  to="/" className="logoutbutton accountdropdownlink" onClick={(e)=> dispatch(sessionActions.logout())}> Logout </Link>
    )
}

export default LogoutButton