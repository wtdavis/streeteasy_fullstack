import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../../store/session"

function SplashTileSell () {

    const dispatch = useDispatch()
    const history = useHistory()
    const currentUser = useSelector(state => state.session.user)

    const handleSellButton = async () => {
        if (!currentUser) {
            await dispatch(login({credential: "demo@demo.com", password: "password"}))
            .then(history.push("/profile"))
        } else {
            history.push("/profile")
        }
    }

    return (
        <div className="splashtile">
            <p className="splashtiletitle">Sell your home successfully</p>
            <p className="splashtiletext">Track its estimated value, and match with a trusted agent from our Experts network when it's time to list</p>
            <div className="splashtilefooter">
                <div className="splashtilebutton" onClick={e => handleSellButton()}>SEE SELLER TOOLS</div>
            </div>
        </div>
    )

}

export default SplashTileSell