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
import { Loader } from "@googlemaps/js-api-loader"
import Map from "../Maps/Map"
import { changeLeftMargin } from "../../store/modal"
import { handleChangeMargin } from "../utils"

function ListingsIndex (props) {

    const dispatch = useDispatch()
   
    const listings = useSelector(state => state.search)
    const setNavId = props.setNavId
    const {listingId} = useParams()
    const currentUser = useSelector(state => state.session.user)
    
    useEffect( ()=>{
        if (currentUser){
            dispatch(fetchFavorites(currentUser))
        };
        handleChangeMargin(3)
    }, [currentUser] )
    

    
    return (
        <div className="listingsindex">
            <div className="listingslistcontainer">
                 <ListingList/>
            </div>   
            <div className="listingsindexmapcontainer">
                <Map listings={listings} mapClass={"bigmap"} className="listingsindexmap" coordinates={{lat: 40.736180, lng: -73.993867}} />
            </div>
        </div>
    )
}

export default ListingsIndex