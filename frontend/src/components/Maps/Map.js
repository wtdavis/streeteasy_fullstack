import React, { useEffect, useState } from "react"
import { useRef } from "react"
import {Loader} from "@googlemaps/js-api-loader"
import "./maps.css"
import { useSelector } from "react-redux"

 function Map (props) {
    const [mapClass, setMapClass] = useState("smallmap")
    // let key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    // let stupid = process.env.REACT_APP_STUPID_KEY
    const coordinates = props.coordinates
    const loader = new Loader({
        apiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["places"]
    })

    let mapsObj;

    useEffect(  function () {
        if (props.mapClass) {
            setMapClass(props.mapClass)
        }

        let listings = Object.values(props.listings).map(listing => listing.location);
        let addrs = Object.values(props.listings).map(listing => listing.address.split(",")[0])
        
        const google = loader.load().then(google => {

            
            let myMap =  new google.maps.Map(
                document.getElementById("listingmap"), {
                    center: {...coordinates},
                    zoom: 12
                })
            
                for (let i=0;i<listings?.length;i++) {
                debugger
                    let coords = listings[i].split(",")
                    coords = {lat: parseFloat(coords[0]), lng: parseFloat(coords[1])}
                    new google.maps.Marker({
                    position: {lat: coords},
                    map: myMap,
                    title: addrs[i]
                })
            }
            
            })
                
        
        
    
    }, [props])

    // const ref = useRef(null)
    // // const [map, setMap] = useState("")   
    
    // new window.google.maps.Map(ref.current, {
    //     center: {lat: 0, lng: 0},
    //     zoom: 4
    // })

    // useEffect(() => {
    //     let newMap = new window.google.maps.Map(ref.current, {
    //         center: {lat: 0, lng: 0}, 
    //         zoom: 4,
    //     }); 
    //     setMap(newMap)
    // }, [])


    return (
        <div id="listingmap" className={mapClass} >
            Map should go here
        </div>        
    )
}
export default Map