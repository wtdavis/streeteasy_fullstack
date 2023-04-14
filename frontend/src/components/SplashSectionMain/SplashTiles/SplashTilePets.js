import { useState } from "react"

function SplashTilePets () {
    const [pets, setPets] = useState(false)

    const handleCheckbox = () => {
        if (pets) {
            setPets(false)
        } else {
            setPets(true)
        }
    }
    return (
        <div className="splashtilelarge">
            <img className="splashtileimage" src="https://cdn-assets-s3.streeteasy.com/assets/build/media/src/features/home-page-redesign/assets/petFriendly-11cdfdbfa3225f7a3b731419469dfe08.svg"/>
            <div className="splashtilefootersmall" onClick={handleCheckbox}>
                <input type="checkbox" onChange={handleCheckbox} checked={pets} className="splashtilecheckbox"/>
                <p className="footersmalltext">Pet Lover?</p>
            </div>
        </div>
    )

}

export default SplashTilePets