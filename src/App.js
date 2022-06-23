import RoutesPage from "./Router/Routes";
import { BrowserRouter } from "react-router-dom";
import BackToTop from "./Components/BackToTop/BackToTop";
import { useState } from "react";
import data from "./data/data";

function App() {
  const  { products } = data;
  const[product, setProduct] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
          <div className="main">
            <BackToTop/>
            <RoutesPage products={products}/>
          </div>
       
      </BrowserRouter>
    </div>
  );
}

export default App;


