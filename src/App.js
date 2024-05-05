import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ShopContextProvider } from "./Context/ShopContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <ShopContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
