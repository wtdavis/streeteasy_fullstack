import SplashTileDoorman from "./SplashTiles/SplashTileDoorman"
import SplashTileElevator from "./SplashTiles/SplashTileElevator"
import SplashTilePets from "./SplashTiles/SplashTilePets"

function SplashSubSection3 () {
    let a = Math.floor(Math.random() * 45)
    let b = Math.floor(Math.random() * 45)

    return(
         <>
            <div id="splashsub3" className="splashsection">
                <div className="splashtilerow">
                    <SplashTileDoorman/>
                    <SplashTileElevator/>
                    <SplashTilePets/>
                </div>
                <div className="splashbuttonrow">
                    <div className="splashsub3button">Search {a} Rentals</div>
                    <div className="splashsub3button">Search {b} Sales</div>

                </div>
            </div>

  
        </>
    )
}
export default SplashSubSection3