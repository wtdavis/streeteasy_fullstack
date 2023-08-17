import { useState } from "react";
import { useSelector } from "react-redux";
import searchReducer from "../../store/search";
import "./search.css"


function Search () {
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

    const handleSearchSubmit = () => {
        console.log(searchText)
    }
    // const [buy, setBuy] = useState(true)

    // let buyList = [100000, 150000, 200000, 250000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1250000, 1500000, 1750000, 2000000, 2250000, 2500000, 2750000, 3000000, 3500000, 4000000, 4500000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 12000000, 14000000, 16000000, 20000000, 25000000, 30000000]
    
    // let rentList = [500, 750, 1000, 1250, 1500, 1750, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 9000, 10000, 12500, 15000]
    
    
                {/* {rent&& rentList.map(price => <option value={price}/>)} */}
                {/* {buy&& buyList.map(price => <option value={price}/>)} */}
    
    
            // <div id="searchbarradiocontainer">
            //     <input type="radio" name="buyrentbuttons" className="buyrentsearchbutton" value="Rent"/>
            //     <input type="radio" name="buyrentbuttons" className="buyrentsearchbutton" value="Buy"/>
            // </div>
    
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

            <input type="text" className="searchbartextinput" placeholder="Search by Borough or Neighborhood" onChange={e => setSearchText(e.target.value)} value={searchText}/>

            <input type="number" className="searchbarpricepicker" placeholder="Min. Price" onChange={e => setMinPrice(e.target.value)} value={minPrice}/>  

            <input type="number" className="searchbarpricepicker" placeholder="Max Price" onChange={e => setMaxPrice(e.target.value)} value={maxPrice}/>

            <div className="searchbarsubmit" onClick={e => handleSearchSubmit()} value="Search">
                <i className="fa-solid fa-magnifying-glass"/>
            </div>
        </div>
    )

}

export default Search