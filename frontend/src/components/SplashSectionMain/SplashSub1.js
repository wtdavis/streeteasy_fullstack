import SplashTile from "./SplashTile"
import SplashTileBuy from "./SplashTiles/SplashTileBuy"
import SplashTileRent from "./SplashTiles/SplashTileRent"
import SplashTileSell from "./SplashTiles/SplashTileSell"
function SplashSubSection1 () {
    return(
         <>
            <div id="splashsub1" className="splashtilerow">
                {/* <p id="sectiontext">This is a section!</p> */}
                <SplashTileRent/>
                <SplashTileBuy/>
                <SplashTileSell/>
            </div>
            
        </>
    )
}
export default SplashSubSection1