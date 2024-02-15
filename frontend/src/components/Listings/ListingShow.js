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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function ListingShow () {
    const history = useHistory()
    let params = useParams()
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const [listingForm, setListingForm] = useState("listingformhidden")
    const [randVals, setRandVals] = useState({})
    const [amenities, setAmenities] = useState()
    const [listingAmenities, setListingAmenities] = useState()
    const [bedsBaths, setBedsBaths] = useState({bed: "Rooms", bath: "Baths"})
    const [myListing, setMyListing] = useState(false)
    let myListingTimeoutSignature
    const currentUser = useSelector(state => state.session.user)
    const listing = useSelector(state => state.listings.current)
    const coordinates = listing?.location
   
// debugger
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
    
    const amenitiesList = () => {
        let list = ["Doorman", 
                    "Storage Available", 
                    "Bike Parking", 
                    "Parking Garage", 
                    "Swimming Pool", 
                    "Fitness Center", 
                    "Elevator", 
                    "Live-in Super",
                    "Full Service Laundry", 
                    "Roof Deck",
                    "Electric Vehicle Charging",
                    "Yoga Studio",
                    "Sauna"
                ]

        let amenities = []
        let i = Math.floor(Math.random()*11) + 4
        for (i;i>0;i--) {
            let num = Math.floor(Math.random()*11)
            amenities.push(list[num])
        }
        let items = new Set(amenities)
        let arr = Array.from(items.keys())
         setAmenities(arr)

    }

    const listingAmenitiesList = () => {
        let list = [
            "Hardwood Floors",
            "Granite Kitchen",
            "Kitchen Island",
            "Floor to Ceiling Windows",
            "Smart Home Integration",
            "Recessed Lighting",
            "Jacuzzi Tub",
            "Waterfall Shower",
            "Integrated Sound System",
            "Washer/Dryer",
            "Fully Furnished",
            "Balcony",
            "Electronic Locks"
        ]

        let amenities = []
        let i = Math.floor(Math.random()*11) + 4
        for (i;i>0;i--) {
            let num = Math.floor(Math.random()*11)
            amenities.push(list[num])
        }
        let items = new Set(amenities)
        let arr = Array.from(items.keys())
         setListingAmenities(arr)
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

    const handleMyListing = (val) => {
        let temp = listing
        // console.log(myListingTimeoutSignature)
        //check if current user created current listing, and handle myListing(t/f) 
        // state var to help implement the "edit listing" button
        if (temp) {

            debugger
            if (currentUser.id === temp.listerId) {
                debugger
                //if currentUser created current listing, set myListing to true
                console.log("success! myListing === true")
                setMyListing(true)
                if (myListingTimeoutSignature) { 
                    //if this is not the first time , clear setTimeout 
                    console.log(`${myListingTimeoutSignature} timeout cleared`)
                    clearTimeout(myListingTimeoutSignature)
                }
            }
        } else {
            debugger
            // if listing useSelector hasn't loaded yet, wait 2 seconds
            // then run whole function again
            if (myListingTimeoutSignature === undefined) {
                debugger
                console.log(`${myListingTimeoutSignature} set`)
                myListingTimeoutSignature = setTimeout(handleMyListing, 2000)
            }
        }
    } 

    useEffect(() => {

        if (!listing) {
             dispatch(listingsActions.fetchListing(params["listingId"]))
            .then(res => {randomValues(res.listing); handleBedsBaths(res.listing)})
        } else {
            handleBedsBaths()
        }

        handleMyListing()
        handleChangeMargin(25)
        amenitiesList()
        listingAmenitiesList()
    }, [])




if (listing) {
    
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

    const handleShareButton = () => {
        history.push("/developer")
    }

    const handleListingEditButton = () => {
        let user = currentUser;

        // if (listing) {
        // }
        // else {
        //     console.log("this.that")
        // }

        // function teleprompter () {
        //     console.log("I am deeply stupid")
        // }
    }



    
    

    // <ListingForm listing={listing} update={true} formClass={listingForm} setListingForm={setListingForm}/>
    return (
        <div className="listingshowcontainer">

            <div className="listingshowcentercontainer">
                <img className="listingshowphoto" id="listingshowphoto" src={listing.photoUrl}/>

                <div className="listingshowavailableinfo">
                    <div className="listingshowavailablenow listingshowavailableinfoitem">
                        <p className="listingshowavailableon listingshowavailableinfoitemheader">Available On</p> 
                        <p className="listingshowavailablenow listingshowavailableinfoitemtext"> Available Now</p>
                    </div>
                    <div className="listingshowavailablesince listingshowavailableinfoitem">
                        <p className="listingshowavailableinfoitemheader"> Days On Market</p>
                        <p className="listingshowavailableinfoitemtext">
                            { Math.floor(Math.random() * 100) + 1 }
                        </p>
                    </div>
                    <div className="listingshowavailablepricechange listingshowavailableinfoitem">
                        <p className="listingshowavailableinfoitemheader">
                            Last Price Change
                        </p>
                        <p className="listingshowavailableinfoitemtext">
                            <i className="fa-solid fa-arrow-down listingshowavailableinfodownarrow"></i>
                             {Math.floor(Math.random() * 8) + 1} % ({Math.floor(Math.random() *10) + 1} days ago)
                        </p>
                    </div>
                </div>

                <div className="listingshowinfoitem">
                    <p className="listingshowsubtitle aboutthislisting">About the Listing:</p>
                    <p className="listingshowavailableinfoitemheader">Description</p>
                    <p className="listingshowdescription"> {listing?.description}</p>
                </div>

                <div className="listingshowamenitiescontainer listingshowinfoitem">
                    <p className="listingshowsubtitle">Amenities:</p>
                    <p className="listingshowamenitiesinfoitemheader">Building Amenities</p>
                    <ul className="listingshowamenitieslist">
                    {amenities.map(item => <li className="listingshowamenitieslistitem">{item}</li>)}
                    </ul>
                    <p className="listingshowamenitiesinfoitemheader">Listing Amenities</p>
                    <ul className="listingshowamenitieslist">
                    {listingAmenities.map(item => <li className="listingshowamenitieslistitem">{item}</li>)}
                    </ul>
                </div>

                <div className="listingshowtransportcontainer">Near Public transport:</div>

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
                    <div className="bedsbathsinfoitem"> 
                        {randVals["area"]} sq ft
                    </div>
                    <div className="bedsbathsinfoitem"> 
                        {randVals["dlrsqft"]} $/sq ft
                    </div>
                    
                </div>             
                <div className="listingshowrightinfoitem listingshowrental">
                    {rentalText()}{listing.borough}
                </div>
                {myListing&& //if logged in, and current user is creator of current listing, show edit button
                <div className="listingEditButton" onClick={e => handleListingEditButton()}>
                    This will be an edit button
                </div>}

                <div className="favsharebuttonlistingshowcontainer">
                    <div className="favbuttonlistingshowcontainer">
                        <Favorite listing={listing}/>
                    </div>
                    <div className="sharebuttonlistingshow">
                        <i className="fa fa-envelope"></i>
                        <p className="sharebuttontextlistingshow" onClick={e => handleShareButton()}>SHARE</p>
                    </div>
                </div>
                <div className="bedsbathsinfoitem listingshowrandviewers"> 
                    {randVals["viewers"]} people like this listing
                </div>

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