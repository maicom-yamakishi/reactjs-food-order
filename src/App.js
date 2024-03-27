import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  function showCartHandler() {
    setCartIsShow(false);
  }

  return (
    <CartProvider>
      <Cart />
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
