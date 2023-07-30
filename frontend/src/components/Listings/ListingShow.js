import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect, useParams } from "react-router-dom"
import * as listingsActions from "../../store/listings"
import { useEffect, useState } from "react"
import ListingForm from "./ListingForm"
import "./listings.css"
import Favorite from "../Favorites/Favorite"
// debugger
function ListingShow () {
    

    // const listings = useSelector(state => Object.values(state.listings))
    // dispatch(listingsActions.fetchListings())
    
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const [listingForm, setListingForm] = useState("listingformhidden")
    const currentUser = useSelector(state => state.session.user)
    let listing = useSelector(state => state.listings[listingId])

    
    useEffect(() => {
        debugger
        dispatch(listingsActions.addCurrentListing(listing));
        return (
           () => {
            dispatch(listingsActions.clearCurrentListing())
            dispatch(listingsActions.fetchListings())
           }
        )
    }, [dispatch] 
    )

    
    const handleFormDisplay = () => {
        if (listingForm === "listingformhidden")
        {setListingForm("listingformdisplay")
    } else {
        setListingForm("listingformhidden")
    }
    }

    const handleDelete = () => {
        dispatch(listingsActions.deleteListing(listing.id));
        
    }

    

// debugger

if (listing) {
    
    // console.log(listing)
    let type; 
    if ( listing && listing.rental ){
        type = <p className="listinginfoitem"> For Rent</p>
    } else {
        type = <p className="listinginfoitem"> For Sale</p>
    }
    let listingUpdate;
    if (currentUser && currentUser.id === listing.listerId) {
        listingUpdate = <div className="listinginfobutton" id="listingshowupdate" onClick={handleFormDisplay}> Update Listing </div>
    }
    
    let listingDelete;
    if (currentUser && currentUser.id === listing.listerId) {  
        listingDelete = <Link to="/listings" className="listinginfobutton" id="listingshowdelete" onClick={handleDelete}> Delete Listing </Link>
    }
    // debugger
    return (
        <div>
            <div id="spacer"> </div>
            <div id="listingShow">
                <ListingForm listing={listing} update={true} formClass={listingForm} setListingForm={setListingForm}/>

                    <div id="listingsplash">
                        <img id="listingShowImage" src={listing.photoUrl}></img>
                        <div id="listingShowDescription" >
                            <p className="listinginfoheader listinginfoitem" id="listingShowDescriptionHeader">About this Listing:</p>
                            <p className="listinginfoitem" id="listingShowDescriptionText"> {listing.description}</p>
                            {listing.doorman&& <p id="listingdoorman" className="listingamenity">{listing.doorman}</p>}
                        </div>
                    
                    </div>

                    <div id="listinginfo">
                        <p className="listinginfoheader listinginfoitem" id="listingaddress">{listing.address}</p>
                        <p className="listinginfoitem" id="listingshowunit">Unit {listing.unit}</p>

                        <p className="listinginfoitem" id="listingborough">{listing.borough}</p>

                        <div  id="listingshowtyperow" >
                        <p className="listinginfoitem" id="listingprice"> ${listing.price}</p>
                        {type}
                        </div>

                        <div id="listingshowbedbathrow" className="listinginfoitem">
                        <p className="listinginfoitem" id="listingshowbeds"> {listing.numBedrooms} Bedrooms</p>
                        <p className="listinginfoitem" id="listingshowbaths"> {listing.numBaths} Baths</p>
                        </div>
                        <div className="listinginfoitem" id="favoritebutton"> {listingUpdate} </div>
                        <div className="listinginfoitem" id="favoritebutton"> {listingDelete} </div>
                        <Favorite listing={listing}/>
                    </div>
            </div>

        </div>
    )
    } else {
       return (
        <div></div>
       )
    }

    }


    export default ListingShow