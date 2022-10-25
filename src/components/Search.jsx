import React, { useEffect } from 'react';
import MainContext from '../MainContext';
import prods from "../prods.json"
import { useContext } from 'react';
const Search = () => {

    const { searchProd, setSearchProd, result, setResult } = useContext(MainContext);
    const isTyping = searchProd.replace(/\s+/, '').length > 0;

    useEffect(() => {
        if (isTyping) {
            console.log("result", result);
            setResult(prods.filter(item => item.title.toLowerCase().includes(searchProd.toLowerCase())))
        } else {
            setResult([])
        }
    }, [searchProd])

    return (
        <div className='search'>
            <input onChange={(e) => setSearchProd(e.target.value)} className='search-bar' type="text" placeholder='Please search anything to spend' />
        </div>
    )
}

export default Search