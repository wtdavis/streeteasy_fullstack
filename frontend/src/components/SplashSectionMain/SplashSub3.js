import SplashTileDoorman from "./SplashTiles/SplashTileDoorman"
import SplashTileElevator from "./SplashTiles/SplashTileElevator"
import SplashTilePets from "./SplashTiles/SplashTilePets"

function SplashSubSection3 () {
    return(
         <>
            <div id="splashsub3" className="splashsection">
                <div className="splashtilerow">
                    <SplashTileDoorman/>
                    <SplashTileElevator/>
                    <SplashTilePets/>
                </div>
            <div className="splashtilebutton splashsub3button">search button</div>
            </div>

  
        </>
    )
}
export default SplashSubSection3