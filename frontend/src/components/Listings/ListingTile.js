function ListingTile ({listing}) {
    const {price, address, borough, numBedrooms, numBaths, photoUrl} = listing
    return (
        <div className="listingtile">


            <img className="listingTileImage" src={photoUrl}></img>

            <div className="listingtileinfo">
                <p className="listingtileinfoitem" id="listingtileaddress"> {address}</p>
                <p className="listingtileinfoitem" id="listingtileborough"> {borough} </p>
                <p className="listingtileinfoitem" id="listingtileprice">${price} </p>
            <div className="listingTileBedsBaths">
                <div className="numBeds bedsBaths">
                   Beds: {numBedrooms}
                </div>
                <div className="numBaths bedsBaths">
                    Baths: {numBaths}
                </div>
            </div>
            </div>


        </div>
    )

}

export default ListingTile