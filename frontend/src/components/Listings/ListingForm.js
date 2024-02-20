import { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import * as listingsActions from '../../store/listings'
import { useDispatch } from "react-redux"
import './listingform.css'
import Places from "../Maps/Places"

function ListingForm ({listing, formClass, handleFormDisplay, update}) {
    listing ||= 
    update ||= false
    const dispatch = useDispatch()
    const history = useHistory()

    const [updateStatus, setUpdateStatus] = useState("")
    const currentUser = useSelector( state => state.session.user)
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
    const errors = useSelector(state => state.errors.listings)
    
    useEffect(() => {
        if (listing){
            setPhotoFile(listing.photoUrl)
            setAddress(listing.address);
            setLocation(listing.location);
            setNumBeds(listing.numBedrooms);
            setNumBaths(listing.numBaths);
            setDescription(listing.description);
            setUnit(listing.unit)
            setPrice(listing.price);
            setBorough(listing.borough);
            setRental(listing.rental)
            // setPhotoFile(listing.photoUrl)
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

    const handlePhotoFile = (e)  => {
        const file = e.target.files[0];
        setPhotoFile(file)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (photoFile) {
            formData.append('listing[photo]', photoFile)
        }

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


        dispatch(listingsActions.clearListingsErrors())

        if (update) {
            handleUpdate(e)
        // dispatch(listingsActions.updateListing(listing.id, formData)).then(res => {
        //     if (!res.errors) {
        //         handleFormDisplay()
        //         history.push(`/listings/${res.listing.id}`)
        //         }
        //     }
        // )
        } else {
        dispatch(listingsActions.createListing(formData)).then(res => {
            if (!res.errors) {
                handleFormDisplay()
                dispatch(listingsActions.addCurrentListing(res.listing))
                history.push(`/listings/${res.listing.id}`)
                }
            }
        )   
        }

    }


    const handleUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('listing[description]', description)
        formData.append('listing[address]', address)
        formData.append('listing[location]', location)
        formData.append('listing[numBedrooms]', numBeds)
        formData.append('listing[buildingId]', 1)
        formData.append('listing[numBaths]', numBaths)
        formData.append('listing[unit]', unit)
        formData.append('listing[listerId]', listerId)
        formData.append('listing[price]', price)
        formData.append('listing[borough]', borough)
        formData.append('listing[rental]', rental)
        // dispatch(listingsActions.updateListing(listing.id, formData)).then(res =>
        //     console.log(res))


         dispatch(listingsActions.updateListing(listing.id, formData)).then(res => {
            if (!res.errors) {
                handleFormDisplay()
                history.push(`/listings/${res.listing.id}`)
                }
            }
        )

    }
    
    // const handleHide = () => {
    //     setListingForm("listingformhidden")
    // }
        
    


    return (
        <div className="listingformpage" >
            
            <div className="listingformclosebutton" onClick={handleFormDisplay}>
                <i className="fa-solid fa-x xicon"></i>
            </div>

            <form className="listingform" onSubmit={handleSubmit}>
                <p className="listingformheader"> Create Your New Listing: </p>

                <p className="listingformsubheader"> Listing Type: </p>

                <select 
                    className="listingforminput"
                    id="rental" value={rental}
                    onChange={(e) => {setRental(e.target.value); dispatch(listingsActions.clearListingsError("rental"))}}>

                    <option value={null} disabled selected>Select a Listing Type</option>
                    <option value={true}>For Rent</option>
                    <option value={false}>For Sale</option>
                </select>
                <p className="listingformerror">{errors.rental} </p>

                <p className="listingformsubheader"> Street Address: </p>

                <input 
                    className="listingforminput" 
                    placeholder="Address" 
                    type="text" 
                    value={address} 
                    onChange={(e) => {setAddress(e.target.value); dispatch(listingsActions.clearListingsError("address"))}}/>
                <p className="listingformerror">{errors.address} </p>

                <p className="listingformsubheader"> Unit: </p>

                <input 
                    className="listingforminput" 
                    placeholder="Unit" 
                    type="text" 
                    value={unit} 
                    onChange={(e) => {setUnit(e.target.value); dispatch(listingsActions.clearListingsError("unit"))}}/>
                <p className="listingformerror">{errors.unit} </p>

                <p className="listingformsubheader"> Borough: </p>

                <select  
                    className="listingforminput"
                    id="borough"
                    value={borough}
                    onChange={(e) => {setBorough(e.target.value); dispatch(listingsActions.clearListingsError("borough"))}}>

                    <option value="" disabled selected>Select a Borough</option>
                    <option value="Staten Island" >Staten Island</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Queens">Queens</option>
                    <option value="Bronx">Bronx</option>
                    <option value="Manhattan">Manhattan</option>
                </select>
                <p className="listingformerror">{errors.borough} </p>
                <p className="listingformsubheader"> Number of Bedrooms: </p>

                <input  
                    className="listingforminput" 
                    min="0" 
                    placeholder="Number of Bedrooms" 
                    type="number" 
                    value={numBeds} 
                    onChange={(e) => {setNumBeds(e.target.value); dispatch(listingsActions.clearListingsError("num_bedrooms"))}}/>
                <p className="listingformerror">{errors.num_bedrooms} </p>

                <p className="listingformsubheader"> Number of Baths: </p>

                <input  
                    className="listingforminput"
                    min="1000000" 
                    placeholder="Number of Baths" 
                    type="number" 
                    value={numBaths} 
                    onChange={(e) => {setNumBaths(e.target.value); dispatch(listingsActions.clearListingsError("num_baths"))}}/>
                <p className="listingformerror">{errors.num_baths} </p>
                
                <p className="listingformsubheader"> Describe your Listing: </p>

                <textarea 
                    className="listingforminput" 
                    placeholder="Listing Description" 
                    type="textarea" 
                    value={description} 
                    onChange={(e) => {setDescription(e.target.value); dispatch(listingsActions.clearListingsError("description"))}}/>
                <p className="listingformerror">{errors.description} </p>


                <p className="listingformsubheader"> Price: </p>
                
                <input 
                    className="listingforminput"
                    placeholder="Price"
                    type="number"
                    step="100"
                    min="500"
                    value={price} 
                    onChange={(e) => {setPrice(e.target.value); dispatch(listingsActions.clearListingsError("price"))}}/>
                <p className="listingformerror">{errors.price} </p>

                <p className="listingformsubheader"> Upload a Photo: </p>

                <input 
                    id="photoupload"
                    className="listingforminput"
                    type="file"
                    onChange={e => handlePhotoFile(e)} />

                <input
                    id="listingformsubmitbutton" 
                    className="listingforminput" 
                    type="submit" 
                    value={updateStatus} />
            </form>

        </div>
    )
}

export default ListingForm