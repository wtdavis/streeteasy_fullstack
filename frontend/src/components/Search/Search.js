import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import searchReducer, { clearSearchResults, fetchSearchResults } from "../../store/search";
import "./search.css"


function Search () {

    const history = useHistory()

    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState("")
    const [minPrice, setMinPrice] = useState()
    const [maxPrice, setMaxPrice] = useState()
    const [rent, setRent] = useState(true)

    const toggleRent = (value) => {
        debugger
        if (value===true || value===false) {
            setRent(value)
        } else {
            if (rent) {
                setRent(false)
            } else {
                setRent(true)
            }
        }
    }

    const handleSearchSubmit =  () => {
        dispatch(fetchSearchResults(searchText))
        history.push("/listings")
    }

    // const [buy, setBuy] = useState(true)

    // let buyList = [100000, 150000, 200000, 250000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1250000, 1500000, 1750000, 2000000, 2250000, 2500000, 2750000, 3000000, 3500000, 4000000, 4500000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 12000000, 14000000, 16000000, 20000000, 25000000, 30000000]
    
    // let rentList = [500, 750, 1000, 1250, 1500, 1750, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 9000, 10000, 12500, 15000]
    
    
    
   
    
    return (
        <div id="searchbar">

            <div className="searchbarrentslidercontainer" >

                <input className="buyrentslider" type="checkbox" checked={rent} onChange={e => toggleRent()}/>

                <div className="buyrentsliderlabel labelrent" onClick={e => toggleRent(true)}>
                    <p>
                        Rent
                    </p>
                </div>

                <span className="buyrentsliderslider"></span>

                <div className="buyrentsliderlabel labelbuy" onClick={e => toggleRent(false)}>
                    <p>
                        Buy
                    </p>
                </div>
            </div>
            <div className="searchbarinputcontainer searchbarinputcontainerlocation">
                <p>LOCATION</p>
                <input type="text" className="searchbartextinput" placeholder="Search by Borough or Neighborhood" onChange={e => setSearchText(e.target.value)} value={searchText}/>
            </div>

            <div className="searchbarinputcontainer" >
                <p>MINIMUM PRICE</p>
                <input type="number" className="searchbarpricepicker" placeholder="Min" onChange={e => setMinPrice(e.target.value)} value={minPrice}/>  
            </div>

            <div className="searchbarinputcontainer" >
                <p>MAXIMUM PRICE</p>
                <input type="number" className="searchbarpricepicker" placeholder="Max" onChange={e => setMaxPrice(e.target.value)} value={maxPrice}/>
            </div>

            <div className="searchbarsubmit" onClick={e => handleSearchSubmit()} value="Search">
                <i className="fa-solid fa-magnifying-glass"/>
            </div>
        </div>
    )

}

export default Search