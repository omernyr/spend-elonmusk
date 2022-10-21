import React, { useContext } from 'react'
import MainContext from '../MainContext'

const Header = () => {

    const { elonWorth, setElonWorth } = useContext(MainContext);

    return (
        <header>
            <h1>🤑 <span className='rainbow-text'> Spend Elon Musk </span> 🤑 </h1>
            <span>
                <img className='elon-img' src="https://static01.nyt.com/images/2022/04/26/magazine/26Mag-Musk-01/26Mag-Musk-01-videoSixteenByNineJumbo1600-v6.jpg" alt="" />
            </span>
            <h2>
                ${elonWorth}
            </h2>
        </header>
    )
}

export default Header