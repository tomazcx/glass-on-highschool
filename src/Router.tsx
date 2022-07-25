import { Route, Routes } from "react-router-dom"
import { Cart } from "./pages/Cart"
import { Index } from "./pages/Index"
import { Payment } from "./pages/Payment"
import { ProductPage } from "./pages/ProductPage"
import { Products } from "./pages/Products"
import { Questions } from "./pages/Questions"
import { Register } from "./pages/Register"

export const Router =() =>{
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}