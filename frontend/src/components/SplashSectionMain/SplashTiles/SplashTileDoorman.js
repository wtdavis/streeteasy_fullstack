import { useState } from "react"

function SplashTileDoorman () {
    const [doorman, setDoorman] = useState(false)

    const handleCheckbox = () => {
        if (doorman) {
            setDoorman(false)
        } else {
            setDoorman(true)
        }
    }
    return (
        <div className="splashtilelarge">
            <img className="splashtileimage" src="https://cdn-assets-s3.streeteasy.com/assets/build/media/src/features/home-page-redesign/assets/doorman-c3d97b3f3dad299c48d5cb17dd4e9bcd.svg"/>
            <div className="splashtilefootersmall" onClick={handleCheckbox}>
                <input type="checkbox" onChange={handleCheckbox} checked={doorman} className="splashtilecheckbox"/>
                <p className="footersmalltext"> Looking for a Doorman?</p>
            </div>
        </div>
    )

}

export default SplashTileDoorman