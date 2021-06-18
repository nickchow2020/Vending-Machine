import React from "react"
import imgChip from "./chip.jpg"
import "./Chip.css"
const Chip = ()=>{
    return (
        <div>
            <h1>Chip</h1>
            <img src={imgChip} alt="chip" className="chipImage"/>
        </div>
    )
}

export default Chip