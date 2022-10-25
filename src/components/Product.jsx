import { useContext, useEffect } from "react";
import { AiOutlineHeart, AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai"
import MainContext from "../MainContext";
import prods from "../prods.json";
const Product = () => {

  const { result, basket, setBasket, total, setTotal } = useContext(MainContext);

  const buyProd = (prod) => {
    setBasket([...basket, prod])
    localStorage.setItem("ürünlerim", JSON.stringify(basket))

  }

  useEffect(() => {
    console.log(basket);

    let t = 0;
    basket.map((item) => {
      t += (item.price)
      setTotal(t.toFixed(2))
    })
    console.log("Total bu buuuu ", total);
  }, [basket])

  return (
    <>
      {
        result != 0 ? result.map((prod) =>

          <div className="product" key={prod.id}>
            <span>
              <img className="product-img" src={`${prod.img}`} alt="" />
            </span>

            <span className={`product-name ${prod.title.length}`}>
              {prod.title.length < 20 ? prod.title : prod.title.slice(0, 20) + "..."}
            </span>

            <span className="product-price">
              ${prod.price}
            </span>

            <div className="product-footer">
              <button onClick={() => buyProd(prod)}>
                <AiOutlinePlusSquare />
              </button>
              <button>
                <AiOutlineMinusSquare />
              </button>
            </div>

          </div>)

          :

          prods.map((prod) =>

            <div className="product" key={prod.id}>
              <span>
                <img className="product-img" src={`${prod.img}`} alt="" />
              </span>

              <span className={`product-name`}>
                {prod.title.length < 20 ? prod.title : prod.title.slice(0, 20) + "..."}
              </span>

              <span className="product-price">
                ${prod.price}
              </span>

              <div className="product-footer">
                <button onClick={() => buyProd(prod)}>
                  <AiOutlinePlusSquare />
                </button>
                <button>
                  <AiOutlineMinusSquare />
                </button>
              </div>

            </div>)
      }
    </>
  )
}
export default Product








// import { useState } from "react";
// import axios from "axios";

// const Product = () => {

//   const getproducts = [];

//   let prods = axios('https://fakestoreapi.com/products').then(res => console.log(res.data))
//     // .then(products => {
//     //   console.log('This products', products)


//     // });
//   console.log("Prodlarım",prods);

//   return (
//     <div className='product'>
//       Product

//     </div>
//   )
// }

// export default Product