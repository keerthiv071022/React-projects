// import Navbar from "./Navbar";
// const Contact=()=>{
//     return(
// <>


// <Navbar/>
// <h1>Contact</h1>


// </>



//     )
// }
// export default Contact
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Contact Us</h1>

        <p>Email: keerthiv071022@gmail.com</p>
        <p>Phone: +91 9482737272</p>
        <p>Address: Kalady, Kerala</p>
      </div>
    </>
  );
};

export default Contact;