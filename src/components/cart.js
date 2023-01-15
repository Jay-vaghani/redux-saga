import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/action';

function Cart() {
    const cartItems = useSelector((state) => state)

    const dispatch = useDispatch()

    console.log(cartItems.cartData);
    return (
        <div>
            <ul className="list-group">
                {
                    cartItems.cartData.map((items) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center p-2" key={items.id}>
                                <div className="img-container">
                                    <img src={items.thumbnail} className='img-fluid' style={{ width: "150px" }} alt="" />
                                </div>
                                <div className="item-name" style={{maxWidth: "350px"}}>
                                    <h5 className='fw-bolder'>{items.title}</h5>
                                </div>
                                <div className="item-price" >
                                    <h3 className='fw-bolder'>{items.price}$</h3>
                                </div>
                                <button className='btn btn-primary btn-sm' onClick={() => dispatch(removeFromCart(items.id))}>Remove From Cart</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Cart