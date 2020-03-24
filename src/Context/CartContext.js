import React from 'react';
import LocalCart from '../Utils/LocalCart'

const CartContext = React.createContext();

function CartProvider ({children}) {
    const [cart, setCart ] =React.useState(LocalCart)
    const [total, setTotal] = React.useState(0)
    const [cartItem , setCartItems] = React.useState(0)

    //useEffect to watch changes at the cart
    React.useEffect(()=>{
        //Local storage
        
        //calculating cart items( //total => acc  //cartItems => curr)
        let newCartItems = cart.reduce((total,cartItems)=> {
            console.log('total & cartItems', total,'cart itmes', cartItems.amount);            
            return total += cartItems.amount
        },0)
        setCartItems(newCartItems)
        console.log('cart item',newCartItems)
        //Cart total
        let newTotal =cart.reduce((total, cartItems)=>{
            return total+= (cartItems.amount * cartItems.price)
        },0)
        console.log('newTotal', newTotal);
        // to  2 decimals
        newTotal = parseFloat(newTotal.toFixed(2));
        setTotal(newTotal)
                
        // only Run When something updated at the Cart
},[cart])
    //remove item
    //filter the cart and return only one does not match the id
    const removeItem = id =>{
        // let newCart = [...cart].filter(item => item.id !== id)
        // setCart(newCart)
        setCart ([...cart].filter(item =>item.id !==id))
    }
    //increase item
    const increaseAmount = id =>{
        const newCart = [...cart].map( item =>{
            return item.id ===id ? {...item, amount: item.amount +1} : {...item}
            // if( item.id === id){
            //    let newcart ={...item , amount: (item.amount + 1)}
            //    return newcart                
            // }else{
            //     return {...item}
            // }
        })
        setCart(newCart)
    }
    //decrease item
    const decreaseAmount = (id, amount) =>{
        if (amount === 1){
            removeItem(id)
        }else{
        let newCart =[...cart].map (item =>{
            return item.id ===id ? {...item, amount: item.amount -1} : {...item}
        })
        setCart(newCart)
    }}
    //add  to cart
    const addToCart = pets =>{
        console.log('pets', pets);
        
        
    }
    //clear cart
    const clearCart = () =>{
        setCart([])
    }
    
    return <CartContext.Provider value ={{cart, total, cartItem ,removeItem, increaseAmount, decreaseAmount, addToCart, clearCart}}>
    {children}
    </CartContext.Provider>
}

export {
    CartContext,
    CartProvider
}