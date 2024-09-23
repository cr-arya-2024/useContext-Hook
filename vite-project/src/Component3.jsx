import React,{useContext} from "react"
import {MyComponent} from "./App.jsx"
const Component3=()=>{
    const count=useContext(MyComponent)
return(
    <h1>count: {count}</h1>
)
}
export default Component3