import {
  BrowserRouter,
  Routes,
  NavLink,
  Route
} from "react-router-dom";
import About from "./components/about/About";
import ContactUs from "./components/contact/ContactUs";
import Home from "./components/home/Home";
import CardDetail from "./screen/card/CardDetail";
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <NavLink activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/about">About</NavLink>
        <NavLink activeClassName="active" to="/contact">Contact Us</NavLink>
      </header>
      <main>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<ContactUs />} />
       <Route path="/detail/:id" element={<CardDetail />} />
     </Routes>
      </main>
      <footer style={{textAlign:'center'}}>
       <h3 style={{color:'white'}}>Footer</h3>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
