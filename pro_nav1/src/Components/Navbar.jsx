import { Link } from "react-router-dom";


import App from "../App";
const Navbar=()=>{
    return(
        <>
        <nav>
<ol>

<li><Link to={'/'}>Home</Link></li>
<li><Link to={'/about'}>About</Link></li>
<li><Link to={'/contact'}>Contact</Link></li>

</ol>

        </nav>
        
        </>
    )
}

export default Navbar