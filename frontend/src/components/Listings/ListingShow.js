import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import * as listingsActions from "../../store/listings"
import { useEffect, useState } from "react"
import ListingForm from "./ListingForm"
import "./listings.css"
// debugger
function ListingShow () {
    

    // const listings = useSelector(state => Object.values(state.listings))
    // dispatch(listingsActions.fetchListings())
    
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const [listingForm, setListingForm] = useState("listingformhidden")
    const currentUser = useSelector(state => state.session.user)
    let listing = useSelector(state => state.listings[listingId])

    
    
    const handleFormDisplay = () => {
        if (listingForm === "listingformhidden")
        {setListingForm("listingformdisplay")
    } else {
        setListingForm("listingformhidden")
    }
    }


    useEffect(() => {
        dispatch(listingsActions.fetchListings())
    }, [dispatch, listing] 
    )


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
        listingUpdate = <div className="deletelistingbutton" id="listingshowupdate" onClick={handleFormDisplay}> Update Listing </div>
    }
    
    let listingDelete;
    if (currentUser && currentUser.id === listing.listerId) {  
        listingDelete = <div className="deletelistingbutton" id="listingshowdelete" > Delete Listing </div>
        
    }
    // debugger
    return (
        <div>
            <div id="spacer"> </div>
            <div id="listingShow">
                <ListingForm listing={listing} update={true} formClass={listingForm} setListingForm={setListingForm}/>

                    <div id="listingsplash">
                        <img id="listingShowImage" src="https://photos.zillowstatic.com/fp/37215c41f108aa243aa2e16eec756a5a-se_large_800_400.webp"></img>
                        <div id="listingShowDescription">
                            <p id="listingShowDescriptionHeader">About this Listing:</p>
                            <p id="listingShowDescriptionText"> {listing.description}</p>
                            {listing.doorman&& <p id="listingdoorman" className="listingamenity">{listing.doorman}</p>}
                        </div>
                    
                    </div>

                    <div id="listinginfo">
                        <p className="listinginfoitem" id="listingaddress">{listing.address}, {listing.unit}</p>
                        <p className="listinginfoitem" id="listingborough">{listing.borough}</p>
                        <p className="listinginfoitem" id="listingprice"> ${listing.price}</p>
                        {type}
                        <p className="listinginfoitem" id="listingbeds"> {listing.numBedrooms} Bedroom</p>
                        <p className="listinginfoitem" id="listingbaths"> {listing.numBaths} Bath</p>
                        <div className="listinginfoitem" id="favoritebutton"> {listingUpdate} </div>
                        <div className="listinginfoitem" id="favoritebutton"> {listingDelete} </div>
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