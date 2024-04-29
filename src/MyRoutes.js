import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import MainLayout from "./layouts/MainLayout"
import ProductDetails from "./components/products/ProductDetails"
import Cart from "./pages/Cart"

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout/>}>

                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/product-details/:productId" element={<ProductDetails/>}/>
                <Route path="/cart" element={<Cart/>}/>
                </Route>
            
                 
            </Routes>
        </Router>
    )
}

export default MyRoutes