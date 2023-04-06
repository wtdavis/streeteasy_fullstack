import SplashSectionMain from './SplashSectionMain'
import SplashSubSection1 from './SplashSub1'
import SplashSubSection2 from './SplashSub2'
import './splash.css'

function SplashPage () {
    return <div id="splashpage">
        <SplashSectionMain/>
        <SplashSubSection1/>
        <SplashSubSection2/>
    </div>
}

export default SplashPage