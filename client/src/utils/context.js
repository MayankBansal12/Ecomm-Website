import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context=createContext();

const AppContext=({children})=>{
    const [categories,setCategories]=useState();
    const [products, setProducts]=useState();
    const [cartItem,setCartItem]=useState([]);
    const [count,setCount]=useState(0);
    const [cartTotal,setCartTotal]=useState(0);
    const [showCart, setShowCart]=useState(false);
    const [showSearch, setShowSearch]=useState(false);
    const location=useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[location]);
    
    useEffect(()=>{
        let total=0;
        let count=0;
        cartItem.map(item=>{
            total+=item.attributes.price * item.attributes.quantity;
            count+=item.attributes.quantity;
        });
        setCartTotal(total);
        setCount(count);
    },[cartItem]);

    const addToCart=(product,quantity)=>{
        let items=[...cartItem];
        let index=items.findIndex((p=>p.id===product.id));
        if(index!==-1){
            items[index].attributes.quantity+=quantity;
        }else{
            product.attributes.quantity=quantity;
            items=[...items, product];
        }
        setCartItem(items);
    }
    const removeCart=(product)=>{
        let items=[...cartItem];
        items=items.filter(p=>p.id!==product.id);
        setCartItem(items);
    }
    const productQuantity=(type,product)=>{
        let items=[...cartItem];
        let index=items.findIndex((p=>p.id===product.id));
        if(type==="increase"){
            items[index].attributes.quantity+=1;
        }else{
            if(items[index].attributes.quantity===1)
                return;
            items[index].attributes.quantity-=1;
        }
        setCartItem(items);
    }

    return (
        <Context.Provider value={{
            categories,
            products, 
            setCategories,
            setProducts,
            cartItem,
            count,
            cartTotal,
            setCartItem,
            setCount,
            setCartTotal,
            addToCart,
            removeCart,
            productQuantity,
            showCart, 
            setShowCart,
            showSearch, 
            setShowSearch,
            location
        }} >
            {children}
        </Context.Provider>
    )
}

export default AppContext;