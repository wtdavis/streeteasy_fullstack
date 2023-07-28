import { useState } from "react"
import "./favorites.css"

function Favorite() {
    //this is a button with a heart in it, to add a listing to a user's favorites. it will appear in listing tiles, and on listing show pages.
    let [favHighlighted, setFavHighlighted] = useState(false)
    let [favClassName, setFavClassName] = useState("favoritebuttonhighlightlight")


    let toggleHighlight = () => {
        if (favHighlighted){
            setFavHighlighted(false)
            setFavClassName("favoritebuttonhighlightdark")
        } else {
            setFavHighlighted(true)
            setFavClassName("favoritebuttonhighlightlight")
        }
    }

    

    return (
        
        <div id="favoriteButton" onClick={e => {toggleHighlight(); e.preventDefault()}}>
            <p>
                Cool Beans Dawg
            </p>
        </div>

    )

}

export default Favorite