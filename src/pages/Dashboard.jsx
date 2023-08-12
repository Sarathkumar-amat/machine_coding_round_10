import { useContext } from "react"
import { InventoryContext } from "../context/InventoryProvider"

export function Dashboard()
{
    const {prodList,productData,dispatchProduct} = useContext(InventoryContext);
    const totalStock =prodList?.reduce((initVal,current)=>initVal+current.stock ,0);
    const deliveredCount = prodList?.reduce((initVal,current)=>initVal+current.delivered,0);
    const outOfStock = prodList?.filter(({stock})=>stock<=10).length;

    return (<div>
       
        <h1>Dashboard</h1>
        <div className="dash-container">
            <div className="dash-card">
                {totalStock}
                Total Stock
            </div>
            <div className="dash-card">
                {deliveredCount}
                Total Delivered
            </div>
            <div className="dash-card">
                {outOfStock}
                Low stock items
            </div>
        </div>
    </div>)
}