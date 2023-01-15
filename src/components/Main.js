
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { productList } from "../redux/productAction"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Main() {


    const productData = useSelector((state) => state.productData.products)


    useEffect(() => {
        dispatch(productList())
    }, [])


    const dispatch = useDispatch()

    const producttemp = {
        type: "mobile",
        prize: 40000,
        name: "google pixel",
        color: "grey"
    }

    return (
        <div className="container mt-5">
            {/* <button className='btn btn-primary' onClick={() => dispatch(addToCart(producttemp))}>Add To Cart</button>
            <button className='btn btn-primary' onClick={() => dispatch(removeFromCart(producttemp))}>Remove From Cart</button>
            <button className='btn btn-primary' onClick={() => dispatch(emptyCart())}>Empty Cart</button> */}

            <div className="container overflow-hidden text-center">
                <div className="row gy-4 justify-content-center">
                    {
                        productData && productData.map((product) => {
                            return (
                                <div className="col-lg-4 col-md-6 " key={product.id} >
                                    <div className='m-1 shadow position-relative' style={{ height: "400px" }}>
                                        <div className="img-container ">
                                            <img src={product.thumbnail} className="w-100 " style={{ height: "150px" }} alt="" />
                                        </div>
                                        <div className="info mt-3 p-2 ">
                                            <h5 className='fw-bolder text-start mb-2'>{product.title}</h5>
                                            <h5 className='fw-bolder text-start mb-2'>Brand : {product.brand}</h5>
                                            <h5 className='fw-bolder text-start mb-2'>Price : {product.price}$</h5>
                                            <div className='position-absolute bottom-0 d-flex pb-2   w-100'>
                                                <button className='btn  btn-primary me-1' >Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Main;
