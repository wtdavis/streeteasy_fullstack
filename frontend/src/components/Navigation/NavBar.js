import { useDispatch } from "react-redux"
import DropDown from "./DropDown"
import * as modalActions from '../../store/modal'
function NavBar () {
    const dispatch = useDispatch()
    return (
        <div id="navlinks" onClick={() => dispatch(modalActions.removeModals())}>
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
            {/* <DropDown/> */}
            </div>
        </div>
    )
}
export default NavBar