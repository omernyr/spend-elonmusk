import React, { useContext } from 'react'
import MainContext from '../MainContext'
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"

const Header = () => {

    const { money, darkTheme, setDarkTheme, total } = useContext(MainContext);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
        console.log(darkTheme);
    }

    const elonWorth = money - total;

    return (
        <header>

            <span className='themechange'>

                {darkTheme === false ?
                    <button onClick={toggleTheme}>
                        <BsFillMoonFill className='moonBtn' />
                    </button>
                    :
                    <button onClick={toggleTheme} >
                        <BsFillSunFill className='moonBtn' />
                    </button>
                }

            </span>

            <h1>🤑 <span className='rainbow-text'> Spend Elon Musk </span> 🤑 </h1>
            <span>
                <img className='elon-img' src="https://static01.nyt.com/images/2022/04/26/magazine/26Mag-Musk-01/26Mag-Musk-01-videoSixteenByNineJumbo1600-v6.jpg" alt="" />
            </span>
            <h2>
                ${elonWorth <= 0 ? '0' : elonWorth}
            </h2>
        </header>
    )
}

export default Header