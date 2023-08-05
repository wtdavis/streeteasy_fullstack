import React, { useEffect, useState } from "react"
import { useRef } from "react"
function Map () {
    
    const ref = useRef(null)
    const [map, setMap] = useState("")   
    
    // let map = new window.google.maps.Map(ref.current, {
    //     center: {lat: 0, lng: 0},
    //     zoom: 4
    // })
    useEffect(() => {
        let newMap = new window.google.maps.Map(ref.current, {
            center: {lat: 0, lng: 0}, 
            zoom: 4,
        }); 
        setMap(newMap)
    }, [])

    debugger
    return (
        <>
            <div ref={ref} id="map" value={map}/>
            <div>P</div>
        </> 
        
    )
}
export default Map