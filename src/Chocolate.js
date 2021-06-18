import React from "react"
import imgChocolate from "./chocolate.jpeg"
import "./Chocolate.css"
const Chocolate = ()=>{
    return(
        <div className="chocolate">
            <h1>Chocolate</h1>
            <img src={imgChocolate} alt="chocolate" />
        </div>
    )
}

export default Chocolate