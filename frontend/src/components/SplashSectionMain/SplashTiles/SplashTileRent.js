import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { fetchRentalSearch } from "../../../store/search"

function SplashTileRent () {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleRentSearch = () => {
        dispatch(fetchRentalSearch(true))
        history.push("/listings")
    }

    return (
        <div className="splashtile">
            <p className="splashtiletitle">Rent a NYC apartment</p>
            <p className="splashtiletext">Shop the city's most trusted source of rental listings, filtering for the features you want most</p>
            <div className="splashtilefooter">
                <div className="splashtilebutton" onClick={e => handleRentSearch()}>SEARCH RENTALS</div>
            </div>
        </div>
    )
}

export default SplashTileRent