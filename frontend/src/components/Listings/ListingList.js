import ListingTile from "./ListingTile"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as listingsActions from "../../store/listings"
import * as favoritesActions from "../../store/favorites"
import { Link } from "react-router-dom"
import "./listings.css"
function ListingList () {
    
    const dispatch = useDispatch()
    const listings = useSelector(state => Object.values(state.search))
    const favorites = useSelector(state => state.favorites)
    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(listingsActions.fetchListings());
        if (currentUser) {
            dispatch(favoritesActions.fetchFavorites(currentUser))
        }
    }
    , [dispatch])

    return (
        <div className="listinglist">
        {listings.map((listing) => (<Link key={listing.id}  to={`listings/${listing.id}`}>
        <ListingTile key={listing.id}  listing={listing}/>
        </Link>
        ))}
        </div>  
    )
}
export default ListingList