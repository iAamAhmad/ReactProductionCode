import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
   const [showDropdown, setShowDropdown] = useState(false);

   const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
   };

   return (
      <nav className="navbar d-flex justify-content-between align-items-center">
         <div className="navbar-left">
            <div className="navbar-logo">
               <img src="https://picsum.photos/200" alt="" className="rounded-imae" />
            </div>
         </div>

         <div className="navbar-center">
            <ul className="navbar-links">
               <li className="navbar-link-item"><a href="/" className="navbar-link">Home</a></li>
               <li className="navbar-link-item"><a href="/about" className="navbar-link">About</a></li>
               <li className="navbar-link-item"><a href="/services" className="navbar-link">Services</a></li>
               <li className="navbar-link-item"><a href="/contact" className="navbar-link">Contact</a></li>
            </ul>
         </div>

         <div className="navbar-right d-flex">
            <button className="navbar-cta me-2">Call to Action</button>

            <div className="navbar-profile" onClick={toggleDropdown}>
               {/* Profile picture */}
               <img src="https://picsum.photos/200" alt="Profile" className="rounded-imae" />

               {/* Dropdown */}
               {showDropdown && (
                  <div className="navbar-dropdown">
                     <a href="/edit-profile" className="navbar-dropdown-item">Edit Profile</a>
                     <a href="/logout" className="navbar-dropdown-item">Logout</a>
                     <a href="/logout" className="navbar-dropdown-item">Logout</a>
                  </div>
               )}
               <div className="dropdown-icon" onClick={toggleDropdown}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" fill="none">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path>
                  </svg>
               </div>
            </div>



         </div>

      </nav>
   );
};

export default Navbar;
