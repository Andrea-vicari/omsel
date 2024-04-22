import React from 'react'
import {useState} from 'react';


function Footer() {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <React.Fragment>
    <footer id="main-footer" className="bg-primary light-typo">
        <div className="container text-center">
            <ul className="social-links">
                <li><a href="#link"><i className="bi bi-github fa-fw"></i></a></li>
                <li><a href="#link"><i className="bi bi-facebook fa-fw"></i></a></li>
                <li><a href="#link"><i className="bi bi-linkedin fa-fw"></i></a></li>
            </ul>
            <hr></hr>
            <p className='text-black'>&copy;2024 Proudly coded using React and ready to showcase your next projects</p>


        </div>
        <button id="myBtn" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className='btn btn-sm btn-outline-secondary'>
        <i className='bi bi-arrow-up-square-fill'></i>
        </button>
    </footer>
    </React.Fragment>
  )
}

export default Footer