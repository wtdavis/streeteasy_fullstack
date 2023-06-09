function ListingTile ({listing}) {
    const {price, address, borough, numBedrooms, numBaths, photoUrl} = listing
// debugger
    return (
        <div className="listingTile">
            <img className="listingTileImage" src={photoUrl}></img>

            <div className="listingTileInfo">
                <p className="listingtileinfoitem" id="listingTileAddress"> {address}</p>
                <p className="listingtileinfoitem" id="listingTileBorough"> {borough} </p>
                <p className="listingtileinfoitem" id="listingTilePrice">${price} </p>
            </div>
            <div className="listingTileBedsBaths">
                <div className="numBeds bedsBaths">
                   Beds: {numBedrooms}
                </div>
                <div className="numBaths bedsBaths">
                    Baths: {numBaths}
                </div>
            </div>

        </div>
    )

}

export default ListingTile