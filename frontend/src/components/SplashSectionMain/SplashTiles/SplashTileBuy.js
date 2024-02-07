import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useDispatch } from "react-redux"
import { fetchRentalSearch } from "../../../store/search"
function SplashTileBuy () {
    const history = useHistory()
    const dispatch = useDispatch()
    
    const handleSalesSearch = () => {
        dispatch(fetchRentalSearch(false))
        history.push("/listings")
    }

    return (
        <div className="splashtile">
                <p className="splashtiletitle">Buy with confidence</p>
                <p className="splashtiletext">Find your NYC dream home and match with an Expert Agent who can help you navigate the buying process</p>
            <div className="splashtilefooter">
                <div className="splashtilebutton" onClick={e => {handleSalesSearch()}} >SEARCH SALES</div>
            </div>
        </div>
    )

}

export default SplashTileBuy