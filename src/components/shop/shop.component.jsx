import { Outlet } from "react-router-dom"

export const Shop = ()=>{
    return (
    <div>
        <Outlet/>
        <h1>I am the shop page</h1>
    </div>
    
    )
}