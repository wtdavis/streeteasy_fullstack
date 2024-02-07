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

    const searchObj = {rent: null, minPrice: 0, maxPrice: 100000000, location: "brooklyn manhattan queens bronx staten"}
    
    const handleRentSearch = () => {
        searchObj.rent = true
        dispatch(fetchSearchResults(searchObj))
        history.push("/listings")
    }
    const handleSalesSearch = () => {
        searchObj.rent = false
        dispatch(fetchSearchResults(searchObj))
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