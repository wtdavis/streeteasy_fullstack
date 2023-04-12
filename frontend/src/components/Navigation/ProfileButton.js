import { Link } from 'react-router-dom'
import './navigation.css'

const ProfileButton = () => {
    return(
    <div id="logo" style={{color: "white", fontSize: "20px" }}>
        <i className="fa-solid fa-trash-can"/>
        <Link id="logolink" to="/" style={{textDecoration : "none"}}>EliteEasy </Link>
        </div> )
}

export default ProfileButton