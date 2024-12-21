import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
       <footer className="footer">
      <p>&copy; 2024 My Website. All Rights Reserved.</p>
      <div className="footer-links">
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Terms of Service</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </footer>
    </div>
  )
}

export default Footer
 