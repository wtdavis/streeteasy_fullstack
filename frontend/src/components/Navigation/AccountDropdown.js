import LogoutButton from "./LogoutButton"
import UserProfileButton from "./UserProfileButton"
import "./accountdropdown.css"

function AccountDropdown () {
    return(
        <div className="accountbutton">
            <p className="accountbuttontext">
             My Account
            </p>
            <div className="accountdropdown">
                <UserProfileButton/>
                <LogoutButton/>
            </div>
        </div>
    )

}
export default AccountDropdown