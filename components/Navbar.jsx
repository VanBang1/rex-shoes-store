import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping,AiOutlineUser } from 'react-icons/ai'

import { Cart, Login } from './';
import { useStateContext} from '../context/StateContext';



const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
      <Link href="/"> <img src="favicon.ico" alt="Trulli" width="70" height="70"></img></Link>
      <span className='logo'>.E.X</span>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
        
        <button type="button" className="cart-icon2" onClick={Login} >
          <AiOutlineUser />
        </button>

    </div>
  )
}

export default Navbar;