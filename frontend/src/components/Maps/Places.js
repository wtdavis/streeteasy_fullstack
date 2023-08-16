import {useEffect, useState} from "react"
import {Loader} from "@googlemaps/js-api-loader"
import { useDispatch } from "react-redux"
import { fetchPlaceInfo } from "../../store/places"

function Places () {
    const dispatch = useDispatch()    
    const [data, setData] = useState(null)
    const [inputText, setInputText] = useState("")
    const [service, setService] = useState(null)
    const [request, setRequest] = useState({query: inputText, fields: ['formatted_address', 'geometry.location'], key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})
    const [places, setPlaces] = useState()
    const [maps, setMaps] = useState()


    const loader = new Loader({
        apiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["places"]
    })



    useEffect(  () => {
        // loader.importLibrary("places").then((placesLib) => { 
        //     let res = new placesLib.PlacesService()
        //     setService(res)
        // })
        // loader.importLibrary("maps").then(({Map}) => {
        //      myNewMap = new Map(document.getElementById("listingmap1"), {center: {lat: 50, lng: 50}, zoom: 6})
        // })
        loader.importLibrary("maps").then(res => setMaps(res))
        loader.importLibrary("places").then(res => {setPlaces(res)})
       
       }, [dispatch])
            



    // const options = {
    //         key: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    //         location: null,
    //         queryString: URLize(inputText)
    // }

    // async function findPlace () {
    //     debugger
    //     let res = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?&query=${options.queryString}&key=${options.key}`
    //     )
    //     debugger
    //     let data = await res.json()
    //     setData(data)
    // }
    // ------------------------------

//     function initMap() {
// debugger
//         // var sydney = new maps.LatLng(-33.867, 151.195);
      
//         // infowindow = new google.maps.InfoWindow();
      
//         let map = new maps.Map(
//             document.getElementById('listingmap1'), {center: {lat: -33.867, lng: 151.195}, zoom: 15});
      
//         var request = {
//           query: 'Museum of Contemporary Art Australia',
//           fields: ['name', 'geometry'],
//         };
      
//         var service = new places.PlacesService(map);
      
//         service.findPlaceFromQuery(request, function(results, status) {
//             debugger
//             setData(results)
//           if (status === places.PlacesServiceStatus.OK) {
//             for (var i = 0; i < results.length; i++) {
//             //   createMarker(results[i]);
//             console.log(results[i])
//             }
//             map.setCenter(results[0].geometry.location);
//           }
//         });
//       }
// -------------------------------------
    
     function findPlace () {

        debugger

        let placesService
        let myRequest =  {query: inputText, fields: ['formatted_address', 'geometry'] }

        placesService = new places.PlacesService(document.createElement('p'))
        placesService.findPlaceFromQuery(myRequest, myCallback)        
    }
        
    
    const myCallback = (results, status) => {
        debugger
        console.log(results)
        console.log(status)   
    }

    const fetchPlace = () => {
        let myRequest = {...request, query: inputText}
        debugger
        fetchPlaceInfo(myRequest)
    }

    return (
        <div style={{height: 500, marginTop: 500}}>
            This is a places component
        <input onChange={e => setInputText(e.target.value)} value={inputText}/>
        <button onClick={e => findPlace()}>Gravy</button>
        <button onClick={e => fetchPlace()}>Butter</button>
        <div style={{height: 500}} id="listingmap1"></div>
    </div>
    )
}
export default Places