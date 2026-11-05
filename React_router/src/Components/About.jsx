// import Navbar from "./Navbar";
// const About=()=>{
//     return(
// <>


// <Navbar/>
// <h1>About</h1>


// </>



//     )
// }
// export default About
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>About Us</h1>

        <p>
          We are learning React and React Router.
        
        </p>
      </div>
    </>
  );
};

export default About;