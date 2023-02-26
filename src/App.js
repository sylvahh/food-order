import { useState } from "react";
import Carts from "./components/cart/Carts";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showModal, setShowModal] = useState(false)
  const showModalHandler = () => {
    setShowModal(true)
  }
  const closeModalHandler = () => {
    setShowModal(false)
  }
  return (
    <CartProvider>
      {showModal && <Carts onCloseModal={ closeModalHandler} />}
      <Header onShowModal={showModalHandler} />

      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
 