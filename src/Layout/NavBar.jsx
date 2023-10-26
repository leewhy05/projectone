import React from 'react'
import Marque from './Marque'
import {Link} from "react-router-dom"
import '../Styles/Navbar.css'
import { BsCart4 } from 'react-icons/bs';

const NavBar = () => {
  return (
    <div className='sticky-top'>
        <Marque/>
    <div className='navbar-content'>
    <header className='container d-flex justify-content-between align-items-center'>
        <ul>
            <li className='list-unstyled'>
                <Link className='text-decoration-none'>
                <h2 className='fst-italic text-light'>Leewhy</h2>
                </Link>
            </li>
        </ul>
        <div className="w-50  d-none d-lg-block">
          <form className="">
            <input
              type='search'
              placeholder='search products, brands and categories...'
              className="w-100 form-control "
            />
          </form>
          </div>
        {/*nav links*/}
        <nav className='d-flex'>
           <ul className='d-flex gap-4 list-unstyled justify-content-between align-items-center'>
            <li>
                <Link className='text-decoration-none text-light fs-4'>
                Account
                </Link>
            </li>
            <li>
                 <Link className='text-decoration-none text-light fs-4'>
                 Help
                 </Link>
            </li>
            <li>
              <Link className='text-decoration-none text-light fs-4'>
              <BsCart4/>
              </Link>
            </li>
           </ul> 
        </nav>
    </header>
    </div>
    </div>
  )
}

export default NavBar