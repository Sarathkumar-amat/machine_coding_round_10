import { createContext, useEffect, useReducer, useState } from "react";
import { inventoryData } from "../data/data";

function productReducer(state,action)
{
    const {type,payload} = action;
    switch(type){
        case "SET_PRODUCTS":
            return {...state,allProducts:payload};
        case "SET_DEPT":
            return {...state,deptName:payload};
    }
    
}
export const InventoryContext  = createContext();

export function InventoryProvider({children})
{
  
    localStorage.setItem("allProdList",JSON.stringify(inventoryData));
    // console.log(allList);
    const alllist = localStorage.getItem('allProdList');
    const [prodList,setProdList] = useState(inventoryData);
    // localStorage.setItem("allProds",JSON.stringify(prodList));
    const [productData,dispatchProduct] = useReducer(productReducer,{
        allProducts: prodList,deptName:""
    });
   
    useEffect(()=>{
        const allList = localStorage.getItem("allProds"); 
        if(allList!==null){
            setProdList(JSON.parse(allList));
        }
        dispatchProduct({type:"SET_PRODUCTS",payload:inventoryData})
    },[]);
  
    return (<div>
        <InventoryContext.Provider value={{prodList,setProdList,productData,dispatchProduct}}>
            {children}
        </InventoryContext.Provider>
    </div>)

}