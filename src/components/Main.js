
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import {productList} from "../redux/productAction"
import { useDispatch } from 'react-redux';

function Main() {

    const dispatch = useDispatch()

    const product = {
        type: "mobile",
        prize: 40000,
        name: "google pixel",
        color: "grey"
    }

    return (
        <div className="container">
            <button className='btn btn-primary' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            <button className='btn btn-primary' onClick={() => dispatch(removeFromCart(product))}>Remove From Cart</button>
            <button className='btn btn-primary' onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            <button className='btn btn-primary' onClick={() => dispatch(productList(product))}>Product List</button>
        </div>
    );
}

export default Main;
