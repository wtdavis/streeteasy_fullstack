import { useEffect } from "react"
import { useRef } from "react"
function Map () {
    const ref = useRef()
    const key = process.env.GOOGLE_MAPS_API_KEY
    debugger
       
    
    // let map = new window.google.maps.Map(ref.current, {
    //     center: {lat: 0, lng: 0},
    //     zoom: 4
    // })
    useEffect(()=> {
        new window.google.maps.Map(ref.current, {
            center: {lat: 0, lng: 0}, 
            zoom: 4,
        })
    })

    return (
        <>
            <div ref={ref} id="map"/>
            <div>P</div>
        </> 
        
    )
}
export default Map