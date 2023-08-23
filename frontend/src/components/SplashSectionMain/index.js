import { useEffect, useState } from 'react'
import SearchBar from '../demoSearch'
import SplashSectionMain from './SplashSectionMain'
import SplashSubSection1 from './SplashSub1'
import SplashSubSection2 from './SplashSub2'
import SplashSubSection3 from './SplashSub3.js'
import './splash.css'
import { restoreSession } from '../../store/session'
import { useDispatch } from 'react-redux'

function SplashPage () {
    let dispatch = useDispatch()
    let csrfToken; 
    const [number, setNumber] = useState()

//     const ensureCSRF = () => {
//     if (!csrfToken) {
//         // console.log("ensure csrf failed")
//         csrfToken = sessionStorage.getItem('X-CSRF-Token');
//         ensureCSRF()
//     } else {
//         // console.log(csrfToken)
//     }
// }
    // ensureCSRF()

    return <div id="splashpage">

        <SplashSectionMain/>
        <SplashSubSection1/>
        <SplashSubSection2/>
        <SplashSubSection3/>
        <SearchBar/>

    </div>
}

export default SplashPage