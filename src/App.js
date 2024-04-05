import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Western from "./Screens/Western";
import { ProductDetails } from "./ClothesCategory/ProductDetails";
import { Ethnics } from "./Screens/Ethnics";
import { CartProvider } from "react-use-cart";
import { Cart } from "./Screens/Cart";
import { Checkout } from "./CartFunctionality/Checkout";
import { Payment } from "./CartFunctionality/Payment";
import { CartPage } from "./CartFunctionality/CartPage";
import { Login } from "./Screens/Login";
import { SignUp } from "./LoginFunctionality/SignUp";

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/western" element={<Western/>}/>
          <Route path="/ethnics" element={<Ethnics/>}/>
          <Route path="/details/:items" element={<ProductDetails/>}/>
          <Route path="/checkout" element={<Cart/>}/>
          <Route path="/cartpage" element={<CartPage/>}/>
          <Route path="/address" element={<Checkout/>}/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
