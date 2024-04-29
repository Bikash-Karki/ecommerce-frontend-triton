import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductCard from '../ui/ProductCard'
import parseImageUrl from "../../utils/imageParser.utils"

const ProductDetails = () => {
    const [product, setProduct] = useState()
    const [productsByCategory, setProductsByCategory] = useState([])
    const params = useParams()
    const id = params.productId

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res => {
                setProduct(res.data)
                const catId = res.data?.category.id
                axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${catId}`)
                    .then(res => {
                        setProductsByCategory(res.data)
                        console.log("Products by Category",res.data)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }, [id])

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cartItemsKey")) || [];
        const found = cart.find((item) => item.id === product.id);
        if (found) {
           found.quantity = found.quantity + 1
           console.log(found)
           toast.success(`${found.title} x ${found.quantity} added to the cart`)
            localStorage.setItem("cartItemsKey", JSON.stringify(cart))
        }
        else{
        cart.push({...product, quantity: 1});
        localStorage.setItem("cartItemsKey", JSON.stringify(cart));
        toast.success('Product added to cart', {
            position: "top-right",
            autoClose: 2000, // 2 seconds
            draggable: true,
        });
    }
    };

    return (
        <>
            <ToastContainer theme="colored" position="bottom-center" />
            {product ? (
                <div className="container my-2">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={parseImageUrl(product.images[0])} alt={product.title} className="img-fluid" width={500} />
                        </div>
                        <div className="col-md-6">
                            <h1 className="text-muted">{product.title}</h1>
                            <h2>${product.price}</h2>
                            <p>{product.description}</p>
                            <p>Category: {product.category.name}</p>
                            <div className="">
                                <button className="btn btn-warning" onClick={handleAddToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>There is not a valid product</p>
            )}
            <hr />
            <div className="container my-4">
                <h1 className="text-center">More For You</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {productsByCategory.filter(prod => prod.id !== product.id).map((product) => (
                        <ProductCard
                            key={product.id}
                            image={parseImageUrl(product.images[0])}
                            title={product.title}
                            price={product.price}
                            id={product.id}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductDetails
