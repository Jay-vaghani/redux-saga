import React from 'react'
import { useSelector } from 'react-redux'

function Header() {

    const result = useSelector((state) => state)


    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand fw-bolder fs-3" href="/">Ecommerce</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <a href="/" className='position-relative d-block d-md-none'>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {result.cartData.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" className='img-fluid logo-mini' alt="cart logo" />

                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li>
                            <a href="/" className='position-relative'>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                    {result.cartData.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" className='img-fluid logo-mini' alt="cart logo" />

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header