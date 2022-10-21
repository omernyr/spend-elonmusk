import { useContext, useEffect, useState } from "react";
import { SlBasket, } from "react-icons/sl"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import MainContext from "../MainContext";
const Product = () => {

  const { getProducts, setGetProducts, result } = useContext(MainContext);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((products) => setGetProducts(products))
  }, []);

  return (
    <>
      {
        result != 0 ? result.map((prod) =>

          <div className="product" key={prod.id}>
            <span>
              <img className="product-img" src={`${prod.image}`} alt="" />
            </span>

            <span className={`product-name ${prod.title.length}`}>
              {prod.title.length < 20 ? prod.title : prod.title.slice(0, 20) + "..."}
            </span>

            <span className="product-price">
              ${prod.price}
            </span>

            <div className="product-footer">
              <button>
                <SlBasket />
              </button>
              <button>
                <AiOutlineHeart />
              </button>
            </div>

          </div>)

          :

          getProducts.map((prod) =>

            <div className="product" key={prod.id}>
              <span>
                <img className="product-img" src={`${prod.image}`} alt="" />
              </span>

              <span className={`product-name`}>
                {prod.title.length < 20 ? prod.title : prod.title.slice(0, 20) + "..."}
              </span>

              <span className="product-price">
                ${prod.price}
              </span>

              <div className="product-footer">
                <button>
                  <SlBasket />
                </button>
                <button>
                  <AiOutlineHeart />
                </button>
              </div>

            </div>)}
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