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
  const [money, setMoney] = useState(218000000000);
  const [darkTheme, setDarkTheme] = useState(false);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const data = {
    searchProd,
    setSearchProd,
    result,
    setResult,
    getProducts,
    setGetProducts,
    money,
    setMoney,
    darkTheme,
    setDarkTheme,
    basket,
    setBasket,
    total,
    setTotal,

  }

  return (
    <MainContext.Provider value={data}>
      <div className={`App ${darkTheme === true ? 'dark' : null} `}>
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
