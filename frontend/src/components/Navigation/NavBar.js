import { useDispatch } from "react-redux"
import DropDown from "./DropDown"
import * as modalActions from '../../store/modal'
function NavBar () {
    const dispatch = useDispatch()




    return (
        <>
        <div id="navlinks" >
            <div id="buy" className="navbutton">
                Buy
            </div>
            <div id="rent" className="navbutton">
                Rent
            </div>
            <div id="sell" className="navbutton">
                Sell
            </div>
            <div id="buildings" className="navbutton">
                Buildings
            </div>
        </div>
        </>

    )
}
export default NavBar