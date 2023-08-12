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
    const allList = localStorage.getItem('allProds');
    // console.log(allList);
    const [prodList,setProdList] = useState(JSON.parse(allList));
    const [productData,dispatchProduct] = useReducer(productReducer,{
        allProducts: prodList,deptName:""
    });
   
    useEffect(()=>{
        localStorage.setItem("allProds",JSON.stringify(inventoryData));
        // setProdList(inventoryData);
        dispatchProduct({type:"SET_PRODUCTS",payload:inventoryData})
    },[]);
    useEffect(()=>{
        localStorage.setItem("allProds",JSON.stringify(prodList));
        dispatchProduct({type:"SET_PRODUCTS",payload:prodList});
    },[prodList]);
    return (<div>
        <InventoryContext.Provider value={{prodList,setProdList,productData,dispatchProduct}}>
            {children}
        </InventoryContext.Provider>
    </div>)

}