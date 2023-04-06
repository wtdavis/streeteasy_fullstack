import SplashTile from "./SplashTile"
import SplashTileBuy from "./SplashTiles/SplashTileBuy"
import SplashTileRent from "./SplashTiles/SplashTileRent"
import SplashTileSell from "./SplashTiles/SplashTileSell"
function SplashSubSection1 () {
    return(
         <>
            <div id="splashsub1" className="splashsection">
                {/* <p id="sectiontext">This is a section!</p> */}
                <SplashTileRent/>
                <SplashTileBuy/>
                <SplashTileSell/>

            </div>
            <div id="housingrightsbar">
                <a href="https://youtu.be/dQw4w9WgXcQ" id="housingrightsmsg">This bar is just a test :/</a>
            </div>
        </>
    )
}
export default SplashSubSection1