import React from "react"
import imgSoda from "./soda.jpeg"
import "./Soda.css"
const Soda = ()=>{
    return(
        <div>
            <h1>Soda</h1>
            <img src={imgSoda} alt="soda" className="sodaImage" />
        </div>
    )
}

export default Soda