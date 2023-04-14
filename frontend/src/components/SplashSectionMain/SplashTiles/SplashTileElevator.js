import { useState } from "react"

function SplashTileElevator () {
    const [elevator, setElevator] = useState(false)

    const handleCheckbox = () => {
        if (elevator) {
            setElevator(false)
        } else {
            setElevator(true)
        }
    }
    return (
        <div className="splashtilelarge">
            <img className="splashtileimage" src="https://cdn-assets-s3.streeteasy.com/assets/build/media/src/features/home-page-redesign/assets/elevator-ee3ae972b5dee01f4f75ecafa50f01ff.svg"/>
            <div className="splashtilefootersmall" onClick={handleCheckbox}>
                <input type="checkbox" onChange={handleCheckbox} checked={elevator} className="splashtilecheckbox"/>
                <p className="footersmalltext"> Hate Taking the Stairs?</p>
            </div>
        </div>
    )

}

export default SplashTileElevator