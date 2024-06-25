import Footer from "./components/footer.js";
import Services from "./components/services.js";
import Tours from "./components/tours.js";
import About from "./components/about.js";
import Hero from "./components/hero.js";
import Navbar from "./components/navbar.js";


function App() {
  return (
   <>
   <h1>backroads app</h1>
   <Navbar/>
   <Hero/>
   <About/>
   <Services/>
  <Tours/> 
  <Footer/>
    
   </>
   );
  
};

export default App;
