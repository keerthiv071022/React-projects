// import Navbar from "./Navbar";
// const Home=()=>{
//     return(
// <>


// <Navbar/>
// <h1>Home</h1>


// </>



//     )
// }
// export default Home
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Welcome to My Website</h1>

        <p>
          This is the home page of our React Router project.
         
        </p>

        <button>Learn More</button>
      </div>
    </>
  );
};

export default Home;