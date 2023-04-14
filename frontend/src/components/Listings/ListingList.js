import ListingTile from "./ListingTile"
import ListingForm from "./ListingForm"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import listingsReducer from "../../store/listings"
import * as listingsActions from "../../store/listings"
import { Link } from "react-router-dom"
import "./listings.css"
function ListingList () {
    const dispatch = useDispatch()
    const listings = useSelector(state => Object.values(state.listings))
    useEffect( ()=> {dispatch(listingsActions.fetchListings())}, [dispatch])
    return (
        <div id="listinglist">
        {listings.map((listing) => (<Link key={listing.id} className="listingtile" to={`listings/${listing.id}`}>
        <ListingTile key={listing.id} listing={listing}/>
        </Link>
        ))}
        </div>  
    )
}
export default ListingList