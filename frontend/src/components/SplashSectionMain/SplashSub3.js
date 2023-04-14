import SplashTileDoorman from "./SplashTiles/SplashTileDoorman"
import SplashTileElevator from "./SplashTiles/SplashTileElevator"
import SplashTilePets from "./SplashTiles/SplashTilePets"

function SplashSubSection3 () {
    return(
         <>
            <div id="splashsub3" className="splashsection">
                <SplashTileDoorman/>
                <SplashTileElevator/>
                <SplashTilePets/>
            </div>
        </>
    )
}
export default SplashSubSection3