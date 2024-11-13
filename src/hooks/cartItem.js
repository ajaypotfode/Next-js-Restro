import { useState } from "react"

const useCartData=()=>{
    const [cartItem, setCartItem]=useState([])
    // const [quantities, setQuantities] = useState({});

    return{
        cartItem,setCartItem    
      }
}
export default useCartData