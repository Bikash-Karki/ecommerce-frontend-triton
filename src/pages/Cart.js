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
                                                <strong>${item.price}</strong>
                                            </div>
                                            
                                            <div className="col-3">
                                                <div className="d-flex align-items-center">
                                                    <button className="btn btn-danger">-</button>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong>{item.quantity}</strong>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button className="btn btn-success">+</button>
                                                </div>
                                            
                                            </div>
                                              
                                            <div className="col-1">
                                                <FaTrash className="text-muted h5"/>
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
                                    <p><strong>Units: </strong></p>
                                    <p><strong>Total Price:</strong></p>
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