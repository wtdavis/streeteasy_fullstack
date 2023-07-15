import { useSelector } from "react-redux"
import * as sessionActions from "../../store/session"
import { useDispatch } from "react-redux"
import "./users.css"
import csrfFetch from "../../store/csrf"
import { Link, Redirect } from "react-router-dom"
import ListingForm from "../Listings/ListingForm"
import { useState } from "react"

function UserShow () {
    const [listingForm, setListingForm] = useState("listingformhidden")
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => {return state.session.user})

    const deleteUser = async () => {
        let res = await csrfFetch(`api/users/${currentUser.id}`, {method: 'DELETE'})
            dispatch(sessionActions.logout());
            <Redirect to="/"/>
    }

    const handleFormDisplay = () => {
        if (listingForm === "listingformhidden")
        {setListingForm("listingformdisplay")
    } else {
        setListingForm("listingformhidden")
        }

    }

    return (
        <div id="userShowPage">
            <div id="spacer"></div>
            <div id="userShow">
                <div className="usershowitem" id="useremail"> <p className="usershowitemheader">Your Current Email: </p> {currentUser.email} </div>
                <div className="usershowitem" id="userfavorites">
                    <p className="usershowitemheader"> Your Favorites: </p>
                    
                </div>
                <div className="listingformtoggle usershowitem" onClick={handleFormDisplay}>
                    <p> Rent or Sell your property! </p>
                </div>
                <Link to="/" className="usershowitem" id="deleteuserbutton" onClick={deleteUser}> <p>Delete User</p></Link>
            </div>
            <div className={listingForm}>
                    <ListingForm update={false} setListingForm={setListingForm}/>
            </div>
        </div>

    )
}

export default UserShow