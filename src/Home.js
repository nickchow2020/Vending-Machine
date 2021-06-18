import React from "react"
import VendingMachine from "./vending.jpeg"
import "./Home.css"
const Home = ()=>{
    return(
        <div>
            <h1>Welcome To My Machine</h1>
            <img src={VendingMachine} alt="vending_machine" className="vending_machine"/> 
        </div>
    )
}

export default Home