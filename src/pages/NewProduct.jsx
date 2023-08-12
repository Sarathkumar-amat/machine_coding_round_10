import { useContext, useReducer } from "react"
import { InventoryContext } from "../context/InventoryProvider";

function newProdDispatcher(state,action)
{
    const {type,payload} = action;
    switch(type){
        case "dept":
            return {...state,department:payload};
        case "name":
            return {...state,name:payload};
        case "price":
            return {...state,price:payload};
        case "stock":
            return {...state,stock:payload};
        case "description":
            return {...state,description:payload};
        case "sku":
            return {...state,sku:payload};
        case "supplier":
            return {...state,supplier:payload};
        case "delivered":
            return {...state,delivered:payload};
        case "url":
            return {...state,imageUrl:payload};
    }
}
export function NewProduct()
{
   const {prodList,setProdList,productData,dispatchProduct} = useContext(InventoryContext);
   const [productValue,dispatcher] = useReducer(newProdDispatcher,{
    department:"",name:"",price:0,stock:0,description:"",price:0,sku:"",supplier:"",
    delivered:0,imageUrl:""
    })
    const handleSubmit = ()=>{
        console.log("here");
        const newProduct = productValue;
        const newList = [...prodList,{...newProduct}];
        localStorage.setItem("allProds",JSON.stringify(newList));
        dispatchProduct({type:"SET_PRODUCTS",payload:newList});
        setProdList(newList);
    }
    return (<div>
       
        <h2>Add New Product</h2>
        <div className="all-inputs">
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
            <label>Name</label>
            <input onChange={(e)=>dispatcher({type:"name",payload:e.target.value})} type="text" />
            <label>description</label>
            <input onChange={(e)=>dispatcher({type:"description",payload:e.target.value})} type="text" />
            <label>price</label>
            <input onChange={(e)=>dispatcher({type:"price",payload:e.target.value})} type="text" />
            <label>stock</label>
            <input onChange={(e)=>dispatcher({type:"stock",payload:e.target.value})} type="text" />
            <label>SKU</label>
            <input onChange={(e)=>dispatcher({type:"sku",payload:e.target.value})} type="text" />
            <label>Supplier</label>
            <input onChange={(e)=>dispatcher({type:"supplier",payload:e.target.value})} type="text" />
            <label>Delivered</label>
            <input onChange={(e)=>dispatcher({type:"delivered",payload:e.target.value})} type="text" />
            <label>Image Url</label>
            <input onChange={(e)=>dispatcher({type:"url",payload:e.target.value})} type="text" />
            <button onClick={handleSubmit}>Add Product</button>
        </div>
       
    </div>)
}