import { useDispatch } from "react-redux"
import * as modalActions from "../../store/modal"
function SplashSubSection2 () {

    const dispatch = useDispatch()

    const handleSignup = () => {
        dispatch(modalActions.addSignupModal())
    }

    return(
         <>
            <div id="splashsub2" className="splashsection">
                <p id="minitileheader">Don't miss your dream home</p>
                <p id="minitilesubheader">Build a profile and let the best listings come to you</p>

                <div id="minitiles">
                    <div id="minitile1" className="minitile" >
                        <img className="minitileimage" src="https://cdn-assets-s3.streeteasy.com/assets/build/media/src/features/home-page-redesign/components/SignInRegisterSection/assets/questionsSupportIcon-c57b86de435018961ba2a3b6f73375f1.svg"></img>
                        <p className="minitiletext">Tell us your needs</p>
                    </div>

                    <div id="minitile2" className="minitile"> 
                        <img className="minitileimage" src="https://cdn-assets-s3.streeteasy.com/assets/build/media/src/features/home-page-redesign/components/SignInRegisterSection/assets/savedListingIcon-5d4a78d3f58041dd9da7254641ba7258.svg"></img>
                        <p className="minitiletext">Save your top searches</p>
                    </div>

                    <div id="minitile3" className="minitile">
                        <img className="minitileimage" src="https://cdn-assets-s3.streeteasy.com/assets/build/media/src/features/home-page-redesign/components/SignInRegisterSection/assets/newListingIcon-094b214c904e2cee10c782278ae6b41b.svg"></img> 
                        <p className="minitiletext">See new listings instantly</p>
                    </div>

                    <div id="minitile4" className="minitile">  
                        <img className="minitileimage" src="https://cdn-assets-s3.streeteasy.com/assets/build/media/src/features/home-page-redesign/components/SignInRegisterSection/assets/homeSearchIcon-0aaee0cae88c227d9456f2b7b6da2777.svg"></img>
                        <p className="minitiletext">Get the right home for you</p>
                    </div>
                </div>
            <div id="minitilebutton" onClick={handleSignup}>
                <p id="minitilebuttontext">BUILD YOUR PROFILE</p>
            </div>
            </div>
        </>
    )
}
export default SplashSubSection2