function ListingTile ({listing}) {
    const {price, address, borough, numBeds, numBaths, photoUrl} = listing
// debugger
    return (
        <div className="listingTile">
            <img className="listingTileImage" src={require('../../assets/penthousephoto.png')}></img>

            <div className="listingTileInfo">
                <p className="listingTileAddress"> {address}</p>
                <p className="listingTileBorough"> {borough} </p>
                <p className="listingTilePrice">{price} </p>
            </div>
            <div className="listingTileBedsBaths">
                <div className="numBeds bedsBaths">
                   Beds: {numBeds}
                </div>
                <div className="numBaths bedsBaths">
                    Baths: {numBaths}
                </div>
            </div>

        </div>
    )

}

export default ListingTile