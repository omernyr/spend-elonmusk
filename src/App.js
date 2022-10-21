import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Search from "./components/Search";
import MainContext from "./MainContext";
import { useState } from "react";
function App() {


  const [searchProd, setSearchProd] = useState('');
  const [result, setResult] = useState([]);
  const [getProducts, setGetProducts] = useState([]);
  const [elonWorth, setElonWorth] = useState(218000000000);

  const data = {
    searchProd,
    setSearchProd,
    result,
    setResult,
    getProducts,
    setGetProducts,
    elonWorth,
    setElonWorth
  }

  return (
    <MainContext.Provider value={data}>
      <div className="App">
        <header>
          <Header />
          <Search />
          <Products />
          <Footer />
        </header>
      </div>
    </MainContext.Provider>
  );
}

export default App;
