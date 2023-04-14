import SearchBar from '../search'
import SplashSectionMain from './SplashSectionMain'
import SplashSubSection1 from './SplashSub1'
import SplashSubSection2 from './SplashSub2'
import SplashSubSection3 from './SplashSub3.js'
import './splash.css'

function SplashPage () {
    return <div id="splashpage">

        <SplashSectionMain/>
        <SplashSubSection1/>
        <SplashSubSection2/>
        <SplashSubSection3/>
        <SearchBar/>

    </div>
}

export default SplashPage