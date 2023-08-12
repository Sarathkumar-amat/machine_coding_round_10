import { useContext } from "react"
import { InventoryContext } from "../context/InventoryProvider"
import { Link, useNavigate } from "react-router-dom";

export function Products()
{
    const {prodList,setProdList,productData,dispatchProduct} = useContext(InventoryContext);
    const navigate = useNavigate();
    let displayData = prodList;

    return (<div>
        <h1>Products</h1>
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