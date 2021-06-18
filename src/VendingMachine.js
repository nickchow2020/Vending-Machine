import React from "react"
import {BrowserRouter,Route} from "react-router-dom"
import Chip from "./Chip"
import Soda from "./Soda"
import Home from "./Home"
import Navigator from "./Navigator"
import Chocolate from "./Chocolate"
import "./VendingMachine.css"

const VendingMachine = ()=>{
    return (
        <div>
            <h1>Vending Machine</h1>
            <BrowserRouter>
                <Navigator />
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/chip'>
                    <Chip />
                </Route>

                <Route exact path='/soda'>
                    <Soda />
                </Route>

                <Route  path='/chocolate'>
                    <Chocolate />
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine
