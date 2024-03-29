import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { fetchSearchResults } from "../../store/search"
import { fetchBuildingSearchResults } from "../../store/search"
import { addCredentialModal } from "../../store/modal"
import * as buildingsActions from "../../store/buildings"

function DropDown (props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [rent, setRent] = useState(true)
    const buildings = useSelector(state => state.buildings)
    const hoverValue = useSelector(state => state.modal.hover)
    const currentUser = useSelector(state => state.session.user)
    // useEffect(() => { 
    //      value = props.mouseOverValue;
    //     if (value==="buy") {
    //         setRent(false)
    //     } else {
    //         setRent(true)   
    //     }
    //     },[props])
    useEffect(() => {
        dispatch(buildingsActions.fetchBuildings())
    }, [dispatch])

    useEffect(()=> {
        switch(hoverValue) {
            case "buy":
                return setRent(false)
            case "rent":
                return setRent(true)
            default:
                return setRent(false)
        } 
    }, [hoverValue])





    let neighborhoodList = [
            "Battery Park City",
            "Chelsea",
            "West Chelsea", 
            "Chinatown", 
            "Civic Center", 
            "East Village", 
            "Financial District",
            "Fulton/Seaport",
            "Flatiron",
            "NoMad", 
            "Gramercy Park",
            "Greenwich Village", 
            "Noho", 
            "Little Italy", 
            "Lower East Side",
            "Two Bridges", 
            "Nolita", 
            "Soho", 
            "Hudson Square",
            "Stuyvesant Town",
            "Tribeca", 
            "West Village",
            "Central Park South",
            "Midtown",
            "Midtown East",
            "Kips Bay",
            "Murray Hill",
            "Sutton Place",
            "Turtle Bay",
            "Beekman",
            "Midtown South",
            "Midtown West",
            "Hell's Kitchen",
            "Hudson Yards",
            "Carnegie Hill",
            "Lenox Hill",
            "Yorkville",
            "Central Harlem",
            "South Harlem",
            "East Harlem",
            "Hamilton Heights",
            "Inwood",
            "Marble Hill",
            "Morningside Heights",
            "Washington Heights",
            "Fort George",
            "Hudson Heights"]

    let boroughList = [
            "Manhattan",
            "Staten Island",
            "Queens",
            "Bronx",
            "Brooklyn"
            ]


    const handleNavSearch = (borough) => {
        dispatch(fetchSearchResults({location: borough, minPrice: 0, maxPrice: 10000000000, rent: rent}))
        history.push("/listings")
    }

    let rand = Math.floor(Math.random() * (neighborhoodList.length - 10))
    let neighborhoodSlice = neighborhoodList.slice(rand, rand+10)

    const handleExpertButton = () => {
        history.push("/developer")
    }

    const handleSellButton = () => {
        if (currentUser) {
            history.push("/profile")
        } else {
            dispatch(addCredentialModal())
        }
    }

    const handleBuildingsButton = (buildingId) => {
        dispatch(fetchBuildingSearchResults({building: buildingId}))
        history.push("/listings")
    }


    const buldingsList = buildings 
    // debugger
    switch (hoverValue) {
        case "buy":
        case "rent":

            return (
                <div id="dropdown">
                    <div className="dropdowncontentcontainer" >
                        <div className="dropdownboroughlistcontainer">
                            <p className="dropdownboroughlistheader">Boroughs:</p>
                            <ul className="dropdownboroughlist">
                                {boroughList.map(borough => {return <li className="dropdownboroughlistitem dropdownmouseoverbutton" onClick={e => handleNavSearch(borough)}> {borough}</li>})}
                            </ul>
                        </div>
                        <div className="dropdownneighborhoodlistcontainer">
                        <p className="dropdownneighborhoodlistheader">Popular Neighborhoods:</p>
                        <ul className="dropdownneighborhoodlist">
                            {neighborhoodSlice.map(neighborhood => {return <li className="dropdownneighborhoodlistitem dropdownmouseoverbutton" onClick={e => handleNavSearch(neighborhood)}>{neighborhood}</li>})}
                        </ul>
                        </div>
                </div>
        </div>
    )
    case "sell":
        return (
            <div id="dropdown">
                <div className="dropdownsellcontainer">
                    <div className="dropdownbutton dropdownmouseoverbutton" onClick={e => handleSellButton()}>
                        <p className="dropdownbuttontext" >Sell your house or apartment</p>
                    </div>
                    <div className="dropdownbutton dropdownmouseoverbutton" onClick={e => handleExpertButton()}>
                        <p className="dropdownbuttontext" >First time seller? Talk to our experts!</p>
                    </div>
                </div>
            </div>
        );

    case "buildings":
        // debugger
        return (
            <div id="dropdown">
                <div className="buildingslistcontainer">
                    <ul className="buildingsList">
                        {buildings.map(building => { return (
                            <li key={building.id} className="buildingsListItem dropdownmouseoverbutton" onClick={e => handleBuildingsButton(building.id)}>{building.name}</li>
                        )
                        })}
                    </ul>
                </div>
            </div>
        )
}

}

export default DropDown 