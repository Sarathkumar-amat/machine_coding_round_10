import { useContext, useReducer } from "react"
import { InventoryContext } from "../context/InventoryProvider";
import { useNavigate } from "react-router-dom";
import { v4 as uuid} from "uuid";

function newProdDispatcher(state,action)
{
    const {type,payload} = action;
    switch(type){
        case "dept":
            return {...state,department:payload};
        case "name":
            return {...state,name:payload};
        case "price":
            return {...state,price:Number(payload)};
        case "stock":
            return {...state,stock:Number(payload)};
        case "description":
            return {...state,description:payload};
        case "sku":
            return {...state,sku:payload};
        case "supplier":
            return {...state,supplier:payload};
        case "delivered":
            return {...state,delivered:Number(payload)};
        case "url":
            return {...state,imageUrl:payload};
    }
}
export function NewProduct()
{
   const {prodList,setProdList,productData,dispatchProduct} = useContext(InventoryContext);
   const navigate = useNavigate();
   const [productValue,dispatcher] = useReducer(newProdDispatcher,{
    department:"",name:"",price:0,stock:0,description:"",price:0,sku:"",supplier:"",
    delivered:0,imageUrl:""
    })
    const handleSubmit = (event)=>{
        event.preventDefault();
        const newProduct = productValue;
        const newList = [...prodList,{...newProduct,id:uuid()}];
        localStorage.setItem("allProds",JSON.stringify(newList));
        dispatchProduct({type:"SET_PRODUCTS",payload:newList});
        setProdList(newList);
        navigate("/products");
    }
    return (<div>
       
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}  className="all-inputs">
            <label>Department</label>
            <select onChange={(e)=>dispatcher({type:"dept",payload:e.target.value})}>
                <option>
                    Select Department
                </option>
                <option value="Kitchen">
                    Kitchen
                </option>
                <option value="Clothing">
                    Clothing
                </option>
                <option value="Toys">
                    Toys
                </option>
            </select>
                <label>Name:</label>
                <input required onChange={(e)=>dispatcher({type:"name",payload:e.target.value})} type="text" />
                <label>Description:</label>
                <input required onChange={(e)=>dispatcher({type:"description",payload:e.target.value})} type="text" />
                <label>Price:</label>
                <input required onChange={(e)=>dispatcher({type:"price",payload:e.target.value})} type="number" />
                <label>Stock: </label>
                <input required onChange={(e)=>dispatcher({type:"stock",payload:e.target.value})} type="number" />
                <label>SKU</label>
                <input required onChange={(e)=>dispatcher({type:"sku",payload:e.target.value})} type="text" />
                <label>Supplier</label>
                <input required onChange={(e)=>dispatcher({type:"supplier",payload:e.target.value})} type="text" />
                <label>Delivered</label>
                <input required onChange={(e)=>dispatcher({type:"delivered",payload:e.target.value})} type="number" />
                <label>Image Url</label>
                <input required onChange={(e)=>dispatcher({type:"url",payload:e.target.value})} type="text" />
            <input className="submit-button" type="submit" value="Add product" />
        </form>
       
    </div>)
}