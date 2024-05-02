import { Fragment, useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaTrash } from "react-icons/fa";
const Cart = () =>{
    const [cartItems, setCartItems] = useState([])
    useEffect(()=>{
        const productsInCart = JSON.parse(localStorage.getItem("cartItemsKey"))
        setCartItems(productsInCart)
        console.log(productsInCart)
    }, [])

    const increaseQty = id => {
        const updatedCartItems = cartItems.map(item => {
            if(item.id === id){
                return {...item, quantity:item.quantity+1}
            }
            return item
        })
        setCartItems(updatedCartItems)
        localStorage.setItem("cartItemsKey", JSON.stringify(cartItems))
    }

    const decreaseQty = id => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id && item.quantity>1) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })
        setCartItems(updatedCartItems)
        localStorage.setItem("cartItemsKey", JSON.stringify(cartItems))
    }

    const removeItem = id => {
        const hasConfirmed = window.confirm("Are you sure you want to remove this product from your cart!")
        if(hasConfirmed){
            const filteredItems = cartItems.filter(item => item.id !==id)
            setCartItems(filteredItems)
            localStorage.setItem("cartItemsKey", JSON.stringify(cartItems))
            toast.error("Product removed from the cart")
        }


    }



    return (
        <>
        <ToastContainer theme="colored" position="bottom-center" />
        <div className="container">
            <div className="row d-flex justify-content-between  my-4">
                {
                    cartItems && cartItems.length === 0 ? 
                    <h1 className="text-danger text-center">Cart is empty</h1>
                    :
                    (
                        <>
                            <h2 className="text-center">Cart Items</h2>
                            <div className="col-md-8">
                                {
                                cartItems.map((item, i)=> (
                                    <Fragment key={i}>
                                        <div className="row d-flex justify-content-evenly align-items-center">
                                            <div className="col-2">
                                               {item.images && <img src={item.images[0]} alt={item.title} width={90}/>}
                                            </div>
                                            <div className="col-3">
                                                <p className="text-bold">{item.title}</p>
                                            </div>
                                            <div className="col-1">
                                                <strong>${item.price * item.quantity}</strong>
                                            </div>
                                            
                                            <div className="col-3">
                                                <div className="d-flex align-items-center">
                                                    <button className="btn btn-danger" onClick={()=>decreaseQty(item.id)}>-</button>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong>{item.quantity}</strong>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button className="btn btn-success" onClick={()=>increaseQty(item.id)}>+</button>
                                                </div>
                                            
                                            </div>
                                              
                                            <div className="col-1">
                                                <button className="btn btn-danger" onClick={()=>removeItem(item.id)}><FaTrash/></button>
                                            </div>
                                        </div>
                                        <hr/>
                                    </Fragment>
                                ))
                                }

                            </div>
                            <div className="col-md-3">
                                <div className="p-2">
                                    <h5>Cart Summary</h5>
                                    <hr/>
                                            <p><strong>Units: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}  </strong>Units</p>
                                    <p><strong>Total Price:$ {cartItems.reduce((acc, item)=>acc + (item.price * item.quantity) ,0)}</strong></p>
                                    <button className="btn btn-warning">Checkout</button>
                                </div>

                            </div>
                        </>
                    )
                }

            </div>
          </div>
        </>
    )
}

export default Cart