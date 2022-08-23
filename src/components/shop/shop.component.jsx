import { Outlet } from "react-router-dom"

export const Shop = ({ text }) => {
    return (
        <div>
            <Outlet />
            <h1 className="new-line">{text}</h1>
        </div>

    )
}