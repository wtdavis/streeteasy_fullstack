import { useEffect, useState } from "react"
import "./favorites.css"
import { useDispatch, useSelector } from "react-redux"
import * as favoritesActions from "../../store/favorites"
function Favorite(props) {
    let dispatch = useDispatch()
    //this is a button with a heart in it, to add a listing to a user's favorites. it will appear in listing tiles, and on listing show pages.
    let [favClassName, setFavClassName] = useState("favoritebuttonhighlightlight")
    let [iconClassName, setIconClassName] = useState("fas fa-heart favhearticonlight")
    let [favButtonText, setFavButtonText] = useState("SAVE")
    let [favHighlighted, setFavHighlighted] = useState(false)
    let favorites = useSelector(state => state.favorites)
    
    let listing = props.listing

    debugger
    
    let isFavoritedInitially = () => {
        if ((Object.keys(favorites)).includes(listing?.id)) {
            setFavHighlighted(true)
        }
    }

    let handleClick = (e) => {
        if (favHighlighted) {
            dispatch(favoritesActions.deleteFavorite(listing))
        } else {
            dispatch(favoritesActions.addFavoriteThunk(listing))
        }

    }


    let toggleHighlight = () => {
        if (favHighlighted){
            setFavHighlighted(false)
        } else {
            setFavHighlighted(true)
        }
    }
    


    let handleIconClassName = () => {
        if (favHighlighted) {
            setFavClassName("favoritebuttonhighlightdark")
            setIconClassName("fas fa-heart favhearticondark")
            setFavButtonText("SAVED")
        } else {
            setIconClassName("fas fa-heart favhearticonlight")
            setFavClassName("favoritebuttonhighlightlight")
            setFavButtonText("SAVE")
        }
    }
    
    useEffect(function () {
        isFavoritedInitially()
        handleIconClassName()

    }, [toggleHighlight])





    
    return (
        
        <div id="favoritebutton" className={favClassName} onClick={e => {handleClick(e); e.preventDefault()}}>
            <i className={iconClassName}></i>
            <p className="favoritetext">{favButtonText}</p>
        </div>

    )

}

export default Favorite