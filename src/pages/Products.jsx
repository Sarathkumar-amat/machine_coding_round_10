import { useContext, useState } from "react"
import { InventoryContext } from "../context/InventoryProvider"
import { Link, useNavigate } from "react-router-dom";

export function Products()
{
    const {prodList,setProdList,productData,dispatchProduct} = useContext(InventoryContext);
    const navigate = useNavigate();
    const [lowStock,setLowStock] = useState(false);
    const [sortType,setSortType] = useState("");
    let displayData = prodList;
    if(productData?.deptName!=="")
    {
        displayData=displayData?.filter(({department})=>department===productData?.deptName)
    }
    if(lowStock)
    {
        displayData = displayData?.filter(({stock})=>stock<=10);
    }
    const handleLowStock = (e)=>{
        if(e.target.checked)
        {
            setLowStock(true);
        }
        else{
            setLowStock(false);
        }
    }
   
    if(sortType!=="")
    {
        console.log(sortType)
        if(sortType==="name")
        {
            displayData = displayData?.sort((a,b)=>{
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if(nameA<nameB) return -1;
                else return 1;
            })
        }
        else if(sortType==="stock")
        {
            displayData = displayData?.sort((a,b)=>a.stock-b.stock);
        }
        else if(sortType==="price")
        {
            displayData = displayData?.sort((a,b)=>a.price-b.price);
        }
    }
  
    return (<div>
        <h1>Products</h1>
        <select value={productData?.deptName} onChange={(e)=>dispatchProduct({type:"SET_DEPT",payload:e.target.value})}>
            <option value="">Select</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option> 
            <option value="Toys">Toys</option>
        </select>
        <input onChange={(e)=>handleLowStock(e)} type="checkbox" />Low Stock items
        <select onChange={(e)=>setSortType(e.target.value)}>
            <option value="">Sort Type</option>
            <option value="name">Name</option>
            <option value="price">Price</option> 
            <option value="stock">Stock</option>
        </select>
        <button onClick={()=>navigate("/newProduct")}>New</button>
        <table>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Supplier</th>
            </tr>
           {displayData?.map(({imageUrl,name,description,price,stock,supplier})=>
                <tr>
                    <td><img src={imageUrl} height="100px" width="100px" alt="product-photo" /></td>
                    <td><Link>{name}</Link></td>
                    <td>{description}</td>
                    <td>{price}</td>
                    <td>{stock}</td>
                    <td>{supplier}</td>
                </tr>
            )}
        </table>
    </div>)
}