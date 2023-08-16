export const fetchPlaceInfo = async (query) => {

    const URLize = (text) => {
        debugger
        let result = ""
        for (let i=0;i<text?.length;i++) {
            if (text[i] === ",") {
                result = result.concat("%2C")
            } else if (text[i] === " ") {
                result = result.concat("%20") 
            } else if (text[i] === ":" ) {
                result = result.concat("=")
            } else if (text[i] !== "[" && text[i] !== "]") {
                result = result.concat(text[i])
            }
        }
        return result
    }

    debugger
    let queryString = JSON.stringify(query)
    queryString = URLize(queryString)
    // queryString = queryString.concat(`query=${URLize(query.query)}&`)
    // queryString = queryString.concat(`fields=${URLize(query.fields)}&`)
    // queryString = queryString.concat(`key=${URLize(query.key)}`)
    debugger    
    let res = await fetch(`/api/places/${queryString}`)
    
}