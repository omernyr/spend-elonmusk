import React, { useEffect } from 'react';
import MainContext from '../MainContext';
import { useContext } from 'react';
const Search = () => {

    const { searchProd, setSearchProd, result, setResult, getProducts, setGetProducts } = useContext(MainContext);

    const isTyping = searchProd.replace(/\s+/, '').length > 0;

    useEffect(() => {
        if (isTyping) {
            console.log("result", result);
            setResult(getProducts.filter(item => item.title.toLowerCase().includes(searchProd.toLowerCase())))
        } else {
            setResult([])
        }
    }, [searchProd])



    return (
        <div className='search'>
            <input onChange={(e) => setSearchProd(e.target.value)} className='search-bar' type="text" placeholder='Please search anything to spend' />
            {result.length === 0 && (<span className={`search-error ${result != 0 ? 'isHidden' : ""}`}> '{searchProd}' ile ilgili bir şey bulamadık 😕 </span>)}

        </div>
    )
}

export default Search