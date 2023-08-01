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
    let favorite = useSelector(state => state.favorites[listing?.id])

    
    let isFavorited = () => {
        if (favorite) {
        // if ((Object.keys(favorites)).includes(`${listing?.id}`)) 
            setFavHighlighted(true)
        }
    }

    let handleClick = async (e) => {
        if (favHighlighted) {
            let res = dispatch(favoritesActions.deleteFavoriteThunk(favorite))
            setFavHighlighted(false);
            handleIconClassName()
        } else {
            let res = dispatch(favoritesActions.addFavoriteThunk(listing))
            setFavHighlighted(true); handleIconClassName()
        }}

    


    let toggleHighlight = () => {
        debugger
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
    useEffect(() => {
        isFavorited()

    },[])

    useEffect(function () {
        handleIconClassName()
    }, [favHighlighted, favorites, isFavorited])





    
    return (
        
        <div id="favoritebutton" className={favClassName} onClick={e => {handleClick(e); e.preventDefault()}}>
            <i className={iconClassName}></i>
            <p className="favoritetext">{favButtonText}</p>
        </div>

    )

}

export default Favorite