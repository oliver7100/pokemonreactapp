import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ShopContextProvider } from "./Context/ShopContext";

function App() {
  return (
    // Wrap your entire application with ShopContextProvider to provide context to all components
    <ShopContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
