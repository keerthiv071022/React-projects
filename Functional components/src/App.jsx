// Functional components
// function App(){
//   return <h1>Hello, How are you??</h1>
// }

// const { useEffect } = require("react")

// export default App




// Hooks //usestate
// import { useState } from "react"
// function App(){
//   const [name,setName]=useState('Keerthi')
//   return(
//     <>
//     <p>Student name: {name}</p>
//     <button onClick={()=>setName('Ashtami')}>Change name</button>

//     </>
//   )
// }
// export default App

// counter button //usestate
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h2>Counter: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </>
//   );
// }

// export default App;
// useeffect
// import { useEffect ,useState } from "react";

// function App(){
//     const [name,setName]=useState('Keerthi')
//     const [count,setCount]=useState(0)
//     useEffect(()=>{
//         console.log(`Name is ${name}`);
        
//     },[name])
//     return(
// <>

// <p>Student name: {name}</p>
// <button onClick={()=>setName('Ashtami')}>Change Name</button>
// <button onClick={()=>setCount(count+1)}>Count: {count}</button>

// </>


//     )
// }
// export default App;

// Create a Student Search Application using React that allows users to search for students by their names.,
// Topics Covered useState, useEffect, Event Handling, Array Filtering, Conditional Rendering, Controlled Components Requirements
// import { useState, useEffect } from "react";

// function App() {
//   const students = [
//     "Keerthi",
//     "Ashtami",
//     "Rahul",
//     "Anjali",
//     "Vishnu",
//     "Arjun",
//     "Meera",
//     "Sanjay",
//     "Priya",
//     "Akhil"
//   ];

//   const [search, setSearch] = useState("");
//   const [filteredStudents, setFilteredStudents] = useState(students);

//   useEffect(() => {
//     console.log("Search Text:", search);

//     let result = students.filter((student) =>
//       student.toLowerCase().includes(search.toLowerCase())
//     );

//     // Bonus: Sort alphabetically
//     result.sort();

//     setFilteredStudents(result);

//     // Bonus: Update browser title
//     document.title = search
//       ? `Searching: ${search}`
//       : "Student Search";
//   }, [search]);

//   // Bonus: Highlight matching text
//   const highlightText = (name) => {
//     if (!search) return name;

//     const index = name.toLowerCase().indexOf(search.toLowerCase());

//     if (index === -1) return name;

//     return (
//       <>
//         {name.substring(0, index)}
//         <mark>
//           {name.substring(index, index + search.length)}
//         </mark>
//         {name.substring(index + search.length)}
//       </>
//     );
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2>Student Search Filter</h2>

//       <input
//         type="text"
//         placeholder="Search Student..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Bonus: Clear Search Button */}
//       <button
//         onClick={() => setSearch("")}
//         style={{ marginLeft: "10px" }}
//       >
//         Clear Search
//       </button>

//       {/* Bonus: Character Count */}
//       <p>Character Count: {search.length}</p>

//       <h3>Student List</h3>

//       {filteredStudents.length > 0 ? (
//         <ul>
//           {filteredStudents.map((student, index) => (
//             <li key={index}>{highlightText(student)}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No Students Found</p>
//       )}

//       <h4>Total Matching Students: {filteredStudents.length}</h4>
//     </div>
//   );
// }

// export default App;


// how to remove useEffect
// import { useEffect ,useState } from "react";

// function App(){
//     const [running,setRunning]=useState(false)
//     const [count,setCount]=useState(0)
//     useEffect(()=>{
//         if(!running)return
//         const interval=setInterval(()=>{
//             setCount((prevCount)=>prevCount+1)
//         },1000)
//     return()=>{
//         clearInterval(interval)
//         console.log('cleanup : interval cleared');
//     }
// },[running])
//     return(
// <>
// <h1>Timer: {count}</h1>
// <button onClick={()=>setRunning(true)}>Start</button>
// <button onClick={()=>setRunning(false)}>Stop</button>
// </>
//     )
// }
// export default App;

//create multiple reference object
// import { useEffect,useRef } from "react";
// function App(){
//     const myRef = useRef(null)
//     useEffect(()=>{
//         console.log(myRef.current);
        
//     },[])
//     const handleSubmit=(event)=>{
//         event.preventDefault()
//         console.log(myRef.current.value);
        
//     }
//     return(
// <>
// <form onSubmit={handleSubmit}>
// <input type="text" ref={myRef}placeholder="Focus me!!"/>
// <input type="submit" value="submit"/>

// </form>



// </>

//     )
// }
// export default App;

// useContext
// import React,{useContext} from "react";
// const myContext=React.createContext()
// function App(){
//     const value="Hello from context"

// return(
//     <myContext.Provider value={value}>
//     <UserList/>
//     </myContext.Provider>
// )

// }

// function UserList(){
//     const contextValue=useContext(myContext)
//     return(
//         <>{contextValue}</>
//     )
// }
// export default App

// useContext theme dark ,light

// import React,{useContext,useState} from "react";
// import ThemeContext from './Context';

// // Step 1: Create a context

// // step2 : create a provider component
// function ThemeProvider({children}){
//     const[theme,setTheme]=useState('light');

//     const toggleTheme=()=>{
//         setTheme(prevTheme=>(prevTheme==='light'?'dark':'light'))

//     }

//     return(
//         <ThemeContext.Provider value={{theme,toggleTheme}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// // Step 3: Use the context in a child component
// function ThemedButton(){
//     const {theme,toggleTheme}=useContext(ThemeContext)

//     return(

//         <>
        
//         <div className="main" style={{
//             backgroundColor:theme==='light'?'#fff':'#333',
//             color:theme==='light'?'#000':'#fff',


//         }}>Hello</div>

//         <button onClick={toggleTheme}
//         style={{
//             backgroundColor:theme==='light'?'#fff':'#333',
//             color:theme==='light'?'#000':'#fff',
//         }}
//         >
//             Toggle Theme ({theme})
//         </button>
        
        
//         </>
//     );

    
// }

// // step 4: Wrap the app with the provider
// function App(){
//     return(
//         <ThemeProvider>
//             <ThemedButton/>
//         </ThemeProvider>
//     )
// }
// export default App

// build a nav bar with sun moon,
// import React, { useState, useContext } from "react";
// import ThemeContext from "./Context";

// // Theme Provider
// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // Navbar Component
// function Navbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <nav
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "15px 30px",
//         backgroundColor: theme === "light" ? "#f4f4f4" : "#222",
//         color: theme === "light" ? "#000" : "#fff",
//       }}
//     >
//       <h2>My Website</h2>

//       <button
//         onClick={toggleTheme}
//         style={{
//           fontSize: "24px",
//           border: "none",
//           background: "transparent",
//           cursor: "pointer",
//         }}
//       >
//         {theme === "light" ? "🌙" : "☀️"}
//       </button>
//     </nav>
//   );
// }

// // Home Component
// function Home() {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: theme === "light" ? "#ffffff" : "#121212",
//         color: theme === "light" ? "#000000" : "#ffffff",
//         transition: "0.3s",
//       }}
//     >
//       <Navbar />

//       <div style={{ padding: "40px" }}>
//         <h1>Welcome!</h1>
//         <p>Click the moon icon to switch to dark mode.</p>
//       </div>
//     </div>
//   );
// }

// // App Component
// function App() {
//   return (
//     <ThemeProvider>
//       <Home />
//     </ThemeProvider>
//   );
// }

// export default App;

// useMemo

// import { useMemo,useState } from "react";

// function App(){
//   const [number,setNumber]=useState(5)
//   const [count,setCount]=useState(0)


// const result= useMemo(()=>{
//   console.log("Calculating...");
//   return number*number
// },[number])


// return(
// <>
// <h2>Square: {result}</h2>
// <button onClick={()=>setCount(count+1)}>Count {count}</button>

// </>

// )
// }


// useCallback
// import React,{useCallback,useState} from "react";
// function App(){
//   const [count,setCount]=useState(0)

//   const greet =useCallback(()=>{
//     console.log('Hello');
    
//   },[])
//   return (
// <>
// <Child greet={greet} />
// <button onClick={()=>setCount(count+1)}>Count : {count}</button> 
// </>
//   )

// }

// let Child=React.memo(({greet})=>{
//   console.log("Child Rendered");
//   return <button onClick={greet}>Click</button>
  
// })

// export default App
