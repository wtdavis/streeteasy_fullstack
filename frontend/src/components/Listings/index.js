import ListingTile from "./ListingTile"
import ListingList from "./ListingList"
import ListingForm from "./ListingForm"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import listingsReducer from "../../store/listings"
import * as listingsActions from "../../store/listings"
import './listings.css'
import { Route, useParams } from "react-router-dom"
import { fetchFavorites } from "../../store/favorites"
function ListingsIndex () {
    const {listingId} = useParams()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    // const listings = useSelector(state => Object.values(state.listings))
    // console.log(listings)
    // useEffect( ()=> {dispatch(listingsActions.fetchListings())}, [dispatch])
    // dispatch(listingsActions.fetchListings())
    // debugger
    useEffect( ()=>{
        if (currentUser)
        // dispatch(fetchFavorites(currentUser))
        console.log(currentUser)
    }, [currentUser])
    return (
        <div id="listingsindex">
            <div id="spacer"></div>
            
            <div id="listingsdiv">
                 <ListingList/>
            </div>   
                     
        </div>
    )

}

export default ListingsIndex