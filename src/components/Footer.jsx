import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <div className='footer'>
      <a href="https://github.com/omernyr"> <AiFillGithub /> </a>
      <a href="https://www.linkedin.com/in/omernayir/"> <AiFillLinkedin /> </a>
      <a href="https://www.instagram.com/omerrnyr/"> <AiFillInstagram /> </a>

    </div>
  )
}

export default Footer