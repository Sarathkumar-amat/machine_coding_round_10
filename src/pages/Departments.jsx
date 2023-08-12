import { useNavigate } from "react-router-dom"

export function Departments()
{
    const navigate = useNavigate();

    return (<div className="dash-container">
        <div className="dash-card">Kitchen</div>
        <div className="dash-card">Clothing</div>
        <div className="dash-card">toys</div>
    </div>)
}