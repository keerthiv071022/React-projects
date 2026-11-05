// import {Link } from "react-router-dom"
// import App from "../App"
// const Navbar=()=>{
//     return(
// <>

// <nav>
//     <ol>
//         <li><Link to={'/'}>Home</Link></li>
//         <li><Link to={'/about'}>About</Link></li>
//         <li><Link to={'/contact'}>Contact</Link></li>
//     </ol>
// </nav>

// </>



//     )
// }

// export default Navbar

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">My Website</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;