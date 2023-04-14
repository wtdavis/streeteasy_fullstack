## EliteEasy: a fullstack StreetEasy.com clone

### Introduction

This project aims to faithfully re-create the StreetEasy site, made for searching and advertising property to rent or sell in New York City. StreetEasy has approachable styling and functionality; I chose to clone it to expand my skills while maintaining achievable goals, and because, having used the site and enjoyed my experience, I wanted to learn more about how to create something useable but simple. This project is ongoing, requiring more features and involving more technologies in the near future. Technologies involved in this project include:
 - Languages: HTML/CSS, Ruby, Javascript
 - Frontend: React/Redux
 - Backend: Ruby on Rails
 - Database: PostgresQL
 - Hosting: Render
 - Services: AWS cloud storage
![splash](https://user-images.githubusercontent.com/121977875/232140305-bb6a8c90-90f0-4035-85e8-ad22f4d9211f.gif)

### User Profile

The user profile of StreetEasy is designed to capture user preferences for property searches. This is mostly to proactively advertise new properties; because this advertising feature will not be part of my website, my user profiles remain minimal. I did, however, maintain the option to create new property listings through the user profile, while making the styling more approachable, and trimming information not relevant to my implementation:

```js
function UserShow () {
    const [listingForm, setListingForm] = useState("listingformhidden")
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => {return state.session.user})

    const deleteUser = async () => {
        let res = await csrfFetch(`api/users/${currentUser.id}`, {method: 'DELETE'})
            dispatch(sessionActions.logout());
            <Redirect to="/"/>
    }

    const handleFormDisplay = () => {
        if (listingForm === "listingformhidden")
        {setListingForm("listingformdisplay")
    } else {
        setListingForm("listingformhidden")
        }

    }

    return (
        <div id="userShowPage">
            <div id="spacer"></div>
            <div id="userShow">
                <div className="usershowitem" id="useremail"> <p className="usershowitemheader">Your Current Email: </p> {currentUser.email} </div>
                <div className="usershowitem" id="userfavorites">
                    <p className="usershowitemheader"> Your Favorites: </p>
                    
                </div>
                <div className="listingformtoggle usershowitem" onClick={handleFormDisplay}>
                    <p> Rent or Sell your property! </p>
                </div>
                <Link to="/" className="usershowitem" id="deleteuserbutton" onClick={deleteUser}> <p>Delete User</p></Link>
            </div>
            <div className={listingForm}>
                    <ListingForm update={false} setListingForm={setListingForm}/>
            </div>
        </div>

    )
}
```
- 

### Listing Index


Browsing a variety of listings in one place creates a design challenge- an index of listings must balance displaying as many listing tiles and as much information about each as possible, while making each listing large enough to be readable, and while avoiding clutter and crowding. StreetEasy's approach is to listing tiles side-by-side, with a sidebar of additional information. I recreated this effect, including as a thumbnail the listing's attached photo:
![listing_index](https://user-images.githubusercontent.com/121977875/232140254-1ec079df-7731-4af0-9c4b-58a56af53f83.png)



### Listing Show

Clicking on a listing tile takes the user to the listing's show page, where its image is expanded, and more information about the listing is displayed. Future functionality will include mutliple photos, photo scrolling, and additional listing details:
![listing_show](https://user-images.githubusercontent.com/121977875/232140282-eae12e29-7f93-4e25-9ff5-181678452e14.png)



### Listing Create
 
Users can create listings, once logged in, from their user profile. Any listing belonging to a user can also be updated or deleted from its show page:
 ![listing_create](https://user-images.githubusercontent.com/121977875/232139893-40761b0e-dc84-41eb-9b10-8fb88f47a774.png)
 ```js 
    function ListingForm ({listing, formClass, setListingForm, update}) {
    update ||= false
    const dispatch = useDispatch()
    
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

    

    const handlePhotoFile = ({currentTarget} ) => {
        const file = currentTarget.files[0];
        setPhotoFile(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
```
### Project Goals

This project remains a work in progress. I plan to implement a search feature, which will allow more dynamic button behavior on the splash page; multiple photo uploads per listing, as well as photo scroll; Google Maps API inclusion, for embedded listing maps; and a favorites feature, which will include of favorited listings on a user's profile page. 

Thank you for exploring this project!

