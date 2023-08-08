import { useState } from "react"

function Component () {

    const [inputValue, setInputValue] = useState("")

    return (
        <div>This is a component
            <input onChange={e => setInputValue(e.target.value)}/>
            <Places input={inputValue}/>
            <button onClick={e => }>Gravy</button>
        </div>
    )
}

export default Component