import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { InventoryContext } from "../context/InventoryProvider";

export function Departments()
{
    const navigate = useNavigate();
    const {dispatchProduct} = useContext(InventoryContext);
    const deptSelect = (deparmentName)=>{
        dispatchProduct({type:"SET_DEPT",payload:deparmentName});
        navigate("/products")
    }
    return (<div className="dash-container">
        <div onClick={()=>deptSelect("Kitchen")} className="dash-card">Kitchen</div>
        <div onClick={()=>deptSelect("Clothing")} className="dash-card">Clothing</div>
        <div onClick={()=>deptSelect("Toys")} className="dash-card">toys</div>
    </div>)
}