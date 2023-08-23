import { useSelector } from "react-redux"
import * as sessionActions from "../../store/session"
import { useDispatch } from "react-redux"
import "./users.css"
import csrfFetch from "../../store/csrf"
import { Link, Redirect } from "react-router-dom"
import ListingForm from "../Listings/ListingForm"
import { useState } from "react"
import ListingTile from "../Listings/ListingTile"
import * as favoritesActions from "../../store/favorites"
import { useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { fetchListings } from "../../store/listings"
import { handleChangeMargin } from "../utils"

function UserShow () {

    const dispatch = useDispatch()
    const [listingForm, setListingForm] = useState("listingformhidden")
    const currentUser = useSelector(state => state.session.user)
    const favorites = useSelector(state => state.favorites)
    const listings = useSelector(state => state.listings)
    const history = useHistory()


    const myListings = Object.values(listings).filter(listing => listing.listerId === currentUser.id)

    debugger

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


    useEffect( () => {
        dispatch(fetchListings())
        dispatch(favoritesActions.fetchFavorites(currentUser))
        handleChangeMargin(3)
    }, [dispatch])

    debugger

    return (
        <div className="profilepage"> 
        <h2> Welcome Back, {currentUser.name}</h2>
        <h4> Your Favorites:</h4>
            <ul className="profilepagefavoritesbar">
                {favorites&& Object.values(favorites).map(favorite => {
                    return (
                        <li className="profilefavoritetile" onClick={e => history.push(`/listings/${favorite.listing.id}`)}>
                            <ListingTile listing={favorite.listing}/>
                        </li>
                    )
                })}
        </ul>
        <h4> Your Listings:</h4>
        <ul className="profilepagefavoritesbar">
                {myListings&& myListings.map(listing => {
                    return (
                        <li className="profilefavoritetile" onClick={e => history.push(`/listings/${listing.id}`)}>
                            <ListingTile listing={listing}/>
                        </li>
                    )
                })}
        </ul>
        
        
        </div>
    )


    return (
        <div id="userShowPage">
            <div id="userShow">
                <div className="usershowitem" id="useremail"> <p className="usershowitemheader">Your Current Email: </p> {currentUser.email} </div>
                <div className="usershowitem" id="userfavorites">
                    <p className="usershowitemheader"> Your Favorites: </p>
                    <ul className="usershowfavoriteslist">
                        {favorites&& Object.values(favorites).map(favorite => {return (
                        <li> <ListingTile listing={favorite.listing}/> </li>)
                        })}
                    </ul>
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