
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate()
    const prodNavigate=useNavigate()
    const getproduct=(id)=>{
        prodNavigate(`/product/${id}`)
    }
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Home</h1>

        <p>
          This is the home page of our React Router project.
         
        </p>

        <button onClick={()=>getproduct(1111)}>Product</button>
        <button onClick={()=>navigate('/about')}>Click me to go to about page</button>
      </div>
    </>
  );
};

export default Home;