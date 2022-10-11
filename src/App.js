import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
//cara langsung
// const Navbar = () => {
//   return (
//     <div>
//       <h3>Navbar</h3>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
    <Header />
      <Navbar />
      <h2>Hello World</h2>
    </div>
  );
}

export default App;
