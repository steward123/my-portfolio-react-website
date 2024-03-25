import './App.css'
import Header from "./components/Header.jsx";
import Banner from "./components/banner.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from "./components/Skills.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import bannerBackground from "./assets/backgroound1.jpg";

function Conatct() {
    return null;
}

function App() {
  return (
    <>
        <BrowserRouter>
            <div className="Main-App">
            <Header />
            </div>
            <div className="page-body">

            <Routes>
                <Route path='/home' element={<Banner />} />
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />}/>
                <Route path='/skill' element={<Skills />} />
            </Routes>
            </div>
        </BrowserRouter>
    </>
  )
}

export default App
