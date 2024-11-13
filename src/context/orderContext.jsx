"use client"
import { createContext } from 'react'
import useCartData from '../hooks/cartItem';

export const OrderFood = createContext();

const OrderContext = ({children}) => {
const {cartItem,setCartItem}=useCartData()

// adding foodItems to the cart
const addCartItems=(menu)=>{
 
    // Check if the item already exists in the cart
    const existingItem = cartItem.find((item) => item._id === menu._id);
    
    if (existingItem) return


    setCartItem([...cartItem,menu])   
}

// handle quantity change
const handleQuantityChange = (index,value) => {
    //   this is wrong approach , with this size of array increase with updated quantity
        // setCartItem([...cartItem,{...cartItem[index],quantity:value}])

        // this approach is correct here only quantity updated
        setCartItem((prevItem)=>{
            const updatedCartItem=[...prevItem]
            updatedCartItem[index]={...updatedCartItem[index],quantity:value}
            return updatedCartItem
       })
    };

    // remove cart item
    const removeCartItems = (id) => {
        const removeItem=cartItem.filter(item=> item._id !== id)
        setCartItem(removeItem)

         
    }

    // Calculate the total price
    const totalPrice = cartItem.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);


  return <OrderFood.Provider value={{cartItem,
                                     totalPrice,
                                     setCartItem,
                                     addCartItems,
                                     handleQuantityChange,
                                     removeCartItems
                                     }}>
    {children}
  </OrderFood.Provider>
}

export default OrderContext