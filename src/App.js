import logo from './logo.svg';
import './App.css';
import { addToCart, removeToCart } from './redux/action';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch() 

  const product = {
    type: "mobile",
    prize: 40000,
    name: "google pixel",
    color: "grey"
  }

  return (
    <>
      <button className='btn btn-primary' onClick={() => dispatch(removeToCart(product))}>Remove To Cart</button>
      <button className='btn btn-primary' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </>
  );
}

export default App;
