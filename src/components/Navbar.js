import React,{useState} from 'react'
import Modal from '../Modal'
import Cart from '../screens/Cart'

// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link,useNavigate} from 'react-router-dom'
import { useCart } from './ContextReducer'
const Navbar = (props) => {
const [cartview, setcartview] = useState(false)
localStorage.setItem('temp', "first")
const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("authToken"

    ) 
    navigate("/login")
  }

  const loadCart = () => {
    setcartview(true)
}

const items = useCart();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-primary " style={{'backgroundColor':'darkseagreen'}} >
  <div className="container-fluid">
    <Link className="navbar-brand" style={{'fontSize':'xxx-large'}} to="/">ZOGGY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item my-2 btnop">
          <Link className="nav-link active fs-5 mx-3 btnop" style={{'padding-top': '8px','fontWeight':'600'}} onMouseEnter={(e) => e.target.style.color = 'white'} // Hover effect
  onMouseLeave={(e) => e.target.style.color = 'black'} aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken")) ?
       <li className="nav-item btnop">
       <Link className="nav-link fs-5 mx-3 active btnop" style={{'padding': '14px','fontWeight':'600'}} aria-current="page" to="/myorder" onMouseEnter={(e) => e.target.style.color = 'white'} // Hover effect
  onMouseLeave={(e) => e.target.style.color = 'black'} >My Orders</Link>
     </li>:"" }
      
      </ul>
      {(!localStorage.getItem("authToken")) ?
     <div className='d-flex'>
          <Link className="btn btnop bg-white text-success mx-1" to="/login">Login</Link>
       
       
          <Link className="btn btnop bg-white text-success mx-1" to="/createuser">Signup</Link>
          </div>
          :
          <div>
         
          <div className="btn btnop bg-white text-success mx-2 " onClick={loadCart}>
                                    <div color="secondary" badgeContent={items.length} >
                                        
                                    </div>
                                    Cart
                                </div>

                                {cartview ? <Modal onClose={() => setcartview(false)}><Cart></Cart></Modal> : ""}

          <div className='btn btnop  bg-white text-danger mx-2 ' onClick={handleLogout}>Logout</div>
          
          </div>
          }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
