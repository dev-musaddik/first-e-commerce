import React, { useEffect, useState } from "react";
import "./Counter.css"
function Counter({itemkey,cartItems,setCartItems,checkOut}) {
const [numberOfsingleItem, setNumberOfSingleItem] = useState(1);
const [ProductsPrice, setProductsPrice] = useState({
  subtotal: 0,
  delivery: 0,
  totalPrice: 0,
});

 
// ------------IncreaseAndDecrease-----------------
const IncreaseAndDecrease = (type) => {
  
    if (type === "increase" && numberOfsingleItem < 10) {
     
      
      const updatedCart = cartItems.map((item) => {
        if (item.key === itemkey) {
       
          
          return { ...item, cartNumber: numberOfsingleItem + 1 ,};
         
        }
        return item;
      });
  
      setNumberOfSingleItem(numberOfsingleItem + 1);
      setCartItems(updatedCart);
    } else if (type === "decrease" && numberOfsingleItem > 1) {
      const updatedCart = cartItems.map((item) => {
        if (item.key === itemkey) {
          return { ...item, cartNumber: numberOfsingleItem - 1 };
        }
        return item;
      });
  
      setNumberOfSingleItem(numberOfsingleItem - 1);
      setCartItems(updatedCart);
      console.log(cartItems)
    }
  };
  
  return (
    <div className="addAndDelete">
      <span onClick={() =>IncreaseAndDecrease("decrease")}>-</span>
      <span>{numberOfsingleItem}</span>
      <span onClick={() =>IncreaseAndDecrease("increase")}>+</span>
    </div>
  );
}
export default Counter;
