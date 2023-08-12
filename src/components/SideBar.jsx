import { NavLink } from "react-router-dom"

export function SideBar()
{
    return (<div className="route-container">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/departments">Departments</NavLink>
        <NavLink to="/products">Products</NavLink>
    </div>)
}