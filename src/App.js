import './App.css';
import './Components/Navbar/Navbar.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Intro } from './Components/Intro/Intro';
import { Services } from './Components/Services/Services';
import { Experience } from './Components/Experience/Experience';
import { Portfolios } from './Components/Portfolios/Portfolios';
import { Testimonials } from './Components/Testimonials/Testimonials';
import { ContactForm } from './Components/ContactForm/ContactForm';
import { Footer } from './Components/Footer/Footer';
import { themeContext } from './Context.js';
import { useContext } from 'react';

import { Toggle } from './Components/Toggle/Toggle';
import { Link } from 'react-scroll';

import { motion } from "framer-motion"; 
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import './Scroll_to_top'

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const toTop = document.getElementById("myBtn");
// const toTop = document.querySelector(".to_top");

  const x = false;
  window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
      document.getElementById("myBtn").classList.add("active");
      x = true;
      window.pageYOffset = 0;
    }
    else{
      document.getElementById("myBtn").classList.remove("active");
      x = false;
    }
  });

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <>
    <div className="App"
      style={{
        background: darkMode? 'black':'',
        color : darkMode? 'white':'',
      }}  
    >
      <a className='to_top' onClick={scrollToTop} id='myBtn' script='./Scroll_to_top.js'>^</a>
      {/* In the className you can also use it like this className:{x? 'to_top active':'to_top'} */}
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Portfolios />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
    <script src='./Scroll_to_top.js'>
      
    </script>
    </>
  );
}

export default App;
