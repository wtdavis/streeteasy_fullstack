function ListingTile ({listing}) {
    const {price, address, borough, numBeds, numBaths} = listing
// debugger
    return (
        <div className="listingTile">
            <img className="listingTileImage" src="https://cdn-assets-s3.streeteasy.com/assets/build/media/src/features/home-page-redesign/assets/view-b942d5206a7ddccdda47b02233273259.png"></img>

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