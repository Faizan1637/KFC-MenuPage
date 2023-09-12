import React, { useState } from "react";
import MenuPage from "./pages/MenuPage";
import CartViewOffCanvas from "./component/CartViewOffCanvas";
import { products } from "./data/product";
import { category } from "./data/category";
import Header from "./component/Header";
import { addOns } from "./data/addOns";

function App() {

  let [cart, setCart] = useState([]);

  const handleCart = (item) => {
    let index = cart.findIndex((x) => x.id === item.id);
      if (index>=0) {
          let updateCart=[...cart]
          updateCart[index].quantity = item.quantity + updateCart[index].quantity;
          setCart(updateCart)
      } else {
          setCart([...cart, item]);
      }
  };

  return (
    <>
      <Header length={cart.length} />

      <CartViewOffCanvas cart={[...cart]} setCart={setCart} />

      <MenuPage
        products={products}
        category={category}
        addOns={addOns}
        handleCart={handleCart}
      />
    </>
  );
}

export default App;
