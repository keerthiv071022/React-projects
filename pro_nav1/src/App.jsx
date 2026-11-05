import React from "react"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Product from "./Product"
function App(){
  return(
<Router>
<Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
{/* <Route path="/product/:id" element={<Product/>}/> */}
<Route path="/product" element={<Product/>}/>
  
</Routes>

</Router>


  )
}
export default App