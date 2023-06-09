import { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import * as listingsActions from '../../store/listings'
import { useDispatch } from "react-redux"
import './listings.css'
import { Redirect} from "react-router-dom"

function ListingForm ({listing, formClass, setListingForm, update}) {
    listing ||= 
    update ||= false
    const dispatch = useDispatch()
    
    const [updateStatus, setUpdateStatus] = useState("")
    const currentUser = useSelector( state => state.session.user)
    // const listings = useSelector(state => state.listings)
    const [listerId, setListerId] = useState(null)
    
    const [address, setAddress] = useState("")
    const [location, setLocation] = useState("1, 1")
    const [numBeds, setNumBeds] = useState(0)
    const [numBaths, setNumBaths] = useState(0)
    const [description, setDescription] = useState("")
    const [unit, setUnit] = useState("")
    const [price, setPrice] = useState(0)
    const [borough, setBorough] = useState("")
    const [rental, setRental] = useState(null)
    const [photoFile, setPhotoFile] = useState(null)

    
    useEffect(() => {
        if (listing){
            setPhotoFile(listing.photoUrl)
            setAddress(listing.address);
            setLocation(listing.location);
            setNumBeds(listing.numBeds);
            setNumBaths(listing.numBaths);
            setDescription(listing.description);
            setUnit(listing.unit)
            // setListerId(listing.listerId);
            setPrice(listing.price);
            setBorough(listing.borough);
            setRental(listing.rental)
            setPhotoFile(listing.photoUrl)
        }
        if (currentUser){
            setListerId(currentUser.id)
        }
        if (update) {
            setUpdateStatus("Update Listing!")
        } else {
            setUpdateStatus("Create Listing!")
        }
    }, [dispatch, updateStatus])

    const handlePhotoFile = ({currentTarget} ) => {
        const file = currentTarget.files[0];
        setPhotoFile(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // debugger
        const formData = new FormData();
        formData.append('listing[photo]', photoFile)
        formData.append('listing[address]', address)
        formData.append('listing[location]', location)
        formData.append('listing[numBedrooms]', numBeds)
        formData.append('listing[buildingId]', 1)
        formData.append('listing[numBaths]', numBaths)
        formData.append('listing[unit]', unit)
        formData.append('listing[description]', description)
        formData.append('listing[listerId]', listerId)
        formData.append('listing[price]', price)
        formData.append('listing[borough]', borough)
        formData.append('listing[rental]', rental)


        console.log(formData)
        //  const formData = {
        //         address: address,
        //         location: "0,0",
        //         numBedrooms: numBeds,
        //         buildingId: 1,
        //         numBaths: numBaths,
        //         unit: unit,
        //         description: description,
        //         listerId: listerId,
        //         price: price,
        //         borough: borough,
        //         rental: rental
        //         }
        
        if (update) {
        dispatch(listingsActions.updateListing(listing.id, formData))
        } else {
        dispatch(listingsActions.createListing(formData))
        }
        setListingForm("listingformhidden")
    }

    
        const handleHide = () => {
            setListingForm("listingformhidden")
        }
        

    return (
        <div className={formClass} id="listingformpage">
            
            <form id="listingform" onSubmit={handleSubmit}>
                <div className="listingformclosebutton" onClick={handleHide}>X</div>
                <p className="listingformheader"> Listing Information: </p>

                <p className="listingformsubheader"> Street Address: </p>
                <input required className="listingforminput" placeholder="Address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>

                <p className="listingformsubheader"> Unit: </p>
                <input required className="listingforminput" placeholder="Unit" type="text" value={unit} onChange={(e) => setUnit(e.target.value)}/>

                <p className="listingformsubheader"> Number of Bedrooms: </p>
                <input required className="listingforminput" min="0" placeholder="Number of Bedrooms" type="number" value={numBeds} onChange={(e) => setNumBeds(e.target.value)}/>

                <p className="listingformsubheader"> Number of Baths: </p>
                <input required className="listingforminput" min="0" placeholder="Number of Baths" type="number" value={numBaths} onChange={(e) => setNumBaths(e.target.value)}/>

                <p className="listingformsubheader"> Describe your Listing: </p>
                <textarea required className="listingforminput" placeholder="Listing Description" type="textarea" value={description} onChange={(e) => setDescription(e.target.value)}/>

                <p className="listingformsubheader"> Price: </p>
                <input required className="listingforminput" placeholder="Price" type="number" step="100" min="500"value={price} onChange={(e) => setPrice(e.target.value)}/>

                <p className="listingformsubheader"> Borough: </p>
                <select required className="listingforminput" id="borough" value={borough} onChange={((e) => setBorough(e.target.value))}>
                    <option value="" disabled selected>Select a Borough</option>
                    <option value="Staten Island" >Staten Island</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Queens">Queens</option>
                    <option value="Bronx">Bronx</option>
                    <option value="Manhattan">Manhattan</option>
                </select>

                <p className="listingformsubheader"> Listing Type: </p>
                <select required className="listingforminput" id="rental" value={rental} onChange={((e) => setRental(e.target.value))}>
                    <option value={null} disabled selected>Select a Listing Type</option>
                    <option value={true}>For Rent</option>
                    <option value={false}>For Sale</option>
                </select>
                <p className="listingformsubheader"> Upload a Photo: </p>
                <input id="photoupload" className="listingforminput"  type="file" onChange={handlePhotoFile} />

                <input id="listingformsubmitbutton" className="listingforminput" type="submit" value={updateStatus} />
            </form>

        </div>
    )
}

export default ListingForm