import { useState } from "react"
import { useSelector } from "react-redux"
import LoginSignupPage from "../LoginSignupPage"
import LoginSignupButton from "./LoginSignupButton"
import AccountDropdown from "./AccountDropdown"
import SocialLinks from "./SocialLinks"

function BannerLinks () {
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div className="bannerlinks">
            <LoginSignupPage/>
            {!sessionUser && <LoginSignupButton/>}
            {sessionUser&& <AccountDropdown/>}
            <SocialLinks/>
            
        </div>
    )

}

export default BannerLinks