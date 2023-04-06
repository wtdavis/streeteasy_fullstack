import LogoutButton from "./LogoutButton"
import UserProfileButton from "./UserProfileButton"

function AccountDropdown () {
    return(
        <div id="accountbutton">
            My Account
            <div id="accountdropdown">
                <UserProfileButton/>
                <LogoutButton/>
            </div>
        </div>
    )

}
export default AccountDropdown