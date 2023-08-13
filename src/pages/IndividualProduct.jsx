import { useContext } from "react";
import { useParams } from "react-router-dom"
import { InventoryContext } from "../context/InventoryProvider";

export function IndividualProduct()
{
    const {prodId} = useParams();
    const {prodList} = useContext(InventoryContext);
    const reqdProd= prodList?.find(({id})=>id==prodId);

    return (<div>
        <h1>Product Details</h1>
        {reqdProd?.name}
    </div>)
}