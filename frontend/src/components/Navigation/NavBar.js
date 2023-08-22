import { useDispatch } from "react-redux"
import DropDown from "./DropDown"
import * as modalActions from '../../store/modal'
function NavBar ({setMouseoverValue}) {
    const dispatch = useDispatch()

    const handleMouseover = (value) => {
        dispatch(modalActions.changeHoverValue(value))
    }



    return (
        <>
        <div id="navlinks" >
            <div id="buy" className="navbutton" onMouseOver={e => {handleMouseover("buy")}}>
                Buy
            </div>
            <div id="rent" className="navbutton" onMouseOver={e => {handleMouseover("rent")}}>
                Rent
            </div>
            <div id="sell" className="navbutton" onMouseOver={e => {handleMouseover("sell")}}>
                Sell
            </div>
            <div id="buildings" className="navbutton" onMouseOver={e => {handleMouseover("buildings")}}>
                Buildings
            </div>
        </div>
        </>

    )
}
export default NavBar