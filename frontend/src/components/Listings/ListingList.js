import ListingTile from "./ListingTile"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as listingsActions from "../../store/listings"
import * as favoritesActions from "../../store/favorites"
import { Link } from "react-router-dom"
import "./listings.css"
function ListingList () {
    
    const dispatch = useDispatch()
    useEffect(() => {dispatch(listingsActions.fetchListings())}, [dispatch])
    const listings = useSelector(state => Object.values(state.listings))
    const favorites =  []
    // useSelector(state =>  Object.keys(state.favorites))
    return (
        <div id="listinglist">
        {listings.map((listing) => (<Link key={listing.id} className="listingtile" to={`listings/${listing.id}`}>
        <ListingTile key={listing.id}  listing={listing}/>
        </Link>
        ))}
        </div>  
    )
}
export default ListingList