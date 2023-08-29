import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect, useParams } from "react-router-dom"
import * as listingsActions from "../../store/listings"
import * as favoritesActions from "../../store/favorites"
import { useEffect, useState } from "react"
import ListingForm from "./ListingForm"
import "./listings.css"
import Favorite from "../Favorites/Favorite"
import Map from "../Maps/Map"
import { changeLeftMargin } from "../../store/modal"
import { handleChangeMargin } from "../utils"
import "./listingshow.css"

function ListingShow () {

    let params = useParams()
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const [listingForm, setListingForm] = useState("listingformhidden")
    const [randVals, setRandVals] = useState({})
    const [bedsBaths, setBedsBaths] = useState({bed: "Rooms", bath: "Baths"})
    const currentUser = useSelector(state => state.session.user)
    let listing = useSelector(state => state.listings.current)
    const coordinates = listing?.location
  

    // useEffect(() => {

        
    //     // dispatch(listingsActions.addCurrentListing(listing));
    //     // randomValues()
    //     // return (
    //     //    () => {
    //     //     dispatch(listingsActions.clearCurrentListing())
    //     //     dispatch(listingsActions.fetchListings())
    //     //    }
    //     )
    // }, [dispatch] 
    // )

    
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

    const randomValues = (obj) => {
        let rand = () => Math.random()
        let floor = (i) => Math.floor(i)
        let res = {}

        res["area"] = floor(rand() * 1000)
        res["viewers"] = floor(rand() * 100)
        
        if (listing) {
            res["dlrsqft"] = listing?.price / res["area"]
        } else {
            res["dlrsqft"] = obj.price / res["area"]
        }

        res["dlrsqft"] = res["dlrsqft"].toFixed(2)
        
        setRandVals(res)
    }


    const handleBedsBaths = (lst) => {
        let bbListing = listing || lst
        if (bbListing.numBedrooms === 1) {
            setBedsBaths(state => {return ( {...state, bed: "Room"})} )
        }

        if (bbListing.numBaths === 1) {
            setBedsBaths(state => ({...state, bath: "Bath"}))
        }
    }

    useEffect(() => {

        debugger
        if (!listing) {
             dispatch(listingsActions.fetchListing(params["listingId"]))
            .then(res => {randomValues(res.listing); handleBedsBaths(res.listing)})
            // dispatch(listingsActions.fetchListings());
            // dispatch(favoritesActions.fetchFavorites(currentUser))
        } else {
            handleBedsBaths()
        }
        handleChangeMargin(25)
    }, [])


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

    const rentalText = () => {
        if (listing.rental) {
            return (
                "For Rent in "
            )
        } else {
            return (
                "For Sale in "
            )
        }
    }

    

    // <ListingForm listing={listing} update={true} formClass={listingForm} setListingForm={setListingForm}/>
    return (
        <div className="listingshowcontainer">

            <div className="listingshowcentercontainer">
                <img className="listingshowphoto" src={listing.photoUrl}/>
            </div>    

            <div className="listingshowrightcontainer">
                <div className="listingshowrightinfoitem listingshowaddress">
                {listing.address.split(",")[0]}
                </div>
                <div className="listingshowrightinfoitem listingshowpricecontainer">
                    <div className="listingshowprice">
                    ${listing.price.toLocaleString("en-US")}
                    </div>
                    <div className="listingshownofee">
                        No Fee
                    </div>
                </div>
                <div className="listingshowrightinfoitem listingshowbedsbathscontainer">
                    <div className="bedsbathsinfoitem">
                        {listing.numBedrooms} {bedsBaths["bed"]}
                    </div>
                    <div className="bedsbathsinfoitem">
                        {listing.numBaths} {bedsBaths["bath"]}
                    </div>                
                </div>
                <div className="listingshowrightinfoitem listingshowrental">
                    {rentalText()}{listing.borough}
                </div>
                {/* <div className="listingshowrightinfoitem">
                   {randVals["dlrsqft"]} $/sq ft
                   {randVals["area"]} sq ft
                   {randVals["viewers"]} people like this listing
                </div> */}

                <Map mapClass="smallmap" listings={[listing]} coordinates={{lat: 40.736180, lng: -73.993867}}/>

            </div>
            
            {/* <div id="listingShow">

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
                        {coordinates&& <Map coordinates={coordinates} /> } 
                    </div>
            </div> */}

        </div>
    )
    } else {
       return (
        <div></div>
       )
    }

    }


    export default ListingShow