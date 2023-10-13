import { useEffect } from "react"
import Search from "../Search/Search"
import { handleChangeMargin } from "../utils"

function SplashSectionMain () {
    useEffect(()=> {
        handleChangeMargin(15)
    })
    return(
         <>
            {/* <div id="spacer"></div> */}
            <div className="splashmain splashsection">
                <Search/>
            </div>
            <div id="housingrightsbar">
                <a href="https://youtu.be/dQw4w9WgXcQ" id="housingrightsmsg" target="_blank">You have a right to fair housing</a>
            </div>
        </>
    )
}

export default SplashSectionMain