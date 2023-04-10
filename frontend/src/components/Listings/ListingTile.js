function ListingTile ({listing}) {
    const {id, address, location} = listing
    console.log(id)
    debugger
    return (
        <div className="listingTile">
            <img className="listingTileImage" src="https://cdn-assets-s3.streeteasy.com/assets/build/media/src/features/home-page-redesign/assets/view-b942d5206a7ddccdda47b02233273259.png"></img>
           <p className="listingTileInfo"> {id} </p>
           <p className="listingTileInfo"> {address}</p>
           <p className="listingTileInfo"> {location} </p>
        </div>
    )

}

export default ListingTile