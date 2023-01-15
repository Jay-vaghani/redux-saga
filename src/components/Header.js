import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Header() {

    const result = useSelector((state) => state)




    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bolder fs-3" to="/">Ecommerce</Link>
                <Link to="/cart" className='position-relative d-block d-md-none'>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {result.cartData.length}
                    </span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" className='img-fluid logo-mini' alt="cart logo" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li>
                            <Link to="/cart" className='position-relative'>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                    {result.cartData.length}
                                </span>
                                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" className='img-fluid logo-mini' alt="cart logo" />

                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header