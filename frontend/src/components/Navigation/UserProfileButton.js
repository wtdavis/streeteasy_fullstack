import { NavLink } from "react-router-dom";

function UserProfileButton () {
    return (
        <NavLink className="profilepagelink accountdropdownlink" to="/profile">Profile</NavLink>
    )
}
export default UserProfileButton