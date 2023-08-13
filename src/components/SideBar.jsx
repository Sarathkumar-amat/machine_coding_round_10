import { NavLink } from "react-router-dom"

const linkStyle = ({isActive})=>({
    color:isActive?"white":"grey",
    textDecoration:"none"
})

export function SideBar()
{
    return (<div className="sidebar-container">
    <div className="route-container">
        <NavLink style={linkStyle} className="route" to="/">Dashboard</NavLink>
        <NavLink style={linkStyle} className="route" to="/departments">Departments</NavLink>
        <NavLink style={linkStyle} className="route" to="/products">Products</NavLink>
        </div>
    </div>)
}