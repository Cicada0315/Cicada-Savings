import React from 'react'
import Dev from '../images/Dev.png';
import githubIcon from '../images/githubIcon.png';

function Footer(){
    return(
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3" id="copyright">
            <a href="https://dev.to/search?q=Cicada0315" target="_blank" rel="noopener noreferrer"><img src={Dev} width="30" height="30" alt="logo"/></a>
            <a href="https://github.com/Cicada0315" target="_blank" rel="noopener noreferrer"><img src={githubIcon} width="30" height="30" alt="logo"/></a>
            Member FDIC
            <br />
            © 2021 Cicada Savings.
            </div>
        </footer>   
    )
}

export default Footer;