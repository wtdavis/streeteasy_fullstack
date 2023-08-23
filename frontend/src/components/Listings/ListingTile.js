import { useEffect, useState } from "react"

function ListingTile ({listing}) {
    const {price, address, borough, numBedrooms, numBaths, rental, photoUrl} = listing

    const [rentalDesc, setRentalDesc] = useState("")
    const [bedsBaths, setBedsBaths] = useState({beds: true, baths: true})
    let nicePrice = price.toLocaleString("en-US")
    let niceAddress = address.split(",")[0]

    // debugger
    useEffect(()=>{
        if (rental) {
            setRentalDesc("For Rent in")
        } else {
            setRentalDesc("For Sale in")
        }

        if (numBaths === 1) {
            setBedsBaths(state => {return {...state, baths: false}})
        }
        if (numBedrooms === 1) {
            setBedsBaths(state => {return {...state, beds: false}})
        }

    }, [])


    

    return (
        <div className="listingtile">
            <img className="listingtileimage" src={photoUrl}></img>
            <div className="listingtileinfo">
                <p className="listingtileinfoitem listingtileborough"> {rentalDesc} {borough} </p>
                <p className="listingtileinfoitem listingtileaddress"> {niceAddress}</p>
                <p className="listingtileinfoitem listingtileprice">${nicePrice} </p>
                <div className="listingtileinfoitem listingtilebedsbathscontainer">
                    <div className="numbeds listingtilebedsbaths listingtileinfoitem">
                   {numBedrooms} {bedsBaths["beds"]? "Beds" : "Bed"}
                    </div>
                    <div className="numbaths listingtilebedsbaths listingtileinfoitem">
                   {numBaths} {bedsBaths["baths"]? "Baths": "Bath"}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ListingTile