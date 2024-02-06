import { useDispatch } from "react-redux"
import SplashTileDoorman from "./SplashTiles/SplashTileDoorman"
import SplashTileElevator from "./SplashTiles/SplashTileElevator"
import SplashTilePets from "./SplashTiles/SplashTilePets"
import {useHistory} from 'react-router-dom'
import {fetchSearchResults} from '../../store/search.js'

function SplashSubSection3 () {
    const dispatch = useDispatch()
    const history = useHistory()
    let a = Math.floor(Math.random() * 45)
    let b = Math.floor(Math.random() * 45)

    
    const handleRentSearch = () => {
        dispatch(fetchSearchResults({rent: true}))
        history.push("/listings")
    }
    const handleSalesSearch = () => {
        dispatch(fetchSearchResults({rent: false}))
        history.push("/listings")
    }

    return(
         <>
            <div id="splashsub3" className="splashsection">
                <div className="splashtilerow">
                    <SplashTileDoorman/>
                    <SplashTileElevator/>
                    <SplashTilePets/>
                </div>
                <div className="splashbuttonrow">
                    <div className="splashsub3button" onClick={e => handleRentSearch()}>
                            <p>SEARCH {a} RENTALS</p>
                        </div>
                    <div className="splashsub3button" onClick={e => handleSalesSearch()}>
                            <p>SEARCH {b} SALES</p>
                        </div>
                </div>
            </div>
 
  
        </>
    )
}
export default SplashSubSection3