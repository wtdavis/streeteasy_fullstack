import ListingTile from "./ListingTile"
import ListingList from "./ListingList"
import ListingForm from "./ListingForm"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import listingsReducer from "../../store/listings"
import * as listingsActions from "../../store/listings"
import './listings.css'
function ListingsIndex () {
    const dispatch = useDispatch()
    const listings = useSelector(state => Object.values(state.listings))
    // console.log(listings)
    useEffect( ()=> {dispatch(listingsActions.fetchListings())}, [dispatch])
    // dispatch(listingsActions.fetchListings())
    // debugger
    return (
        <div>
            <div id="spacer"></div>
            <ul>
                {listings.map((listing) => (<ListingTile key={listing.id} listing={listing}/>))}
            </ul>
        </div>
    )

}

export default ListingsIndex