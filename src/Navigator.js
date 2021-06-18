import React from "react"
import {Link} from "react-router-dom"

const Navigator = ()=>{
    return (
        <nav>
            <Link exact to="/">Home</Link>
            <Link exact to="/chip">Chip</Link>
            <Link exact to="/soda">Soda</Link>
            <Link exact to="/chocolate">Chocolate</Link>
        </nav>
    )
}

export default Navigator