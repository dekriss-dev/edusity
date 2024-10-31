import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"


const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Nasz Program' title='Co oferujemy?'/>
          <Programs/>
          <About/>
          <Title subTitle='Galeria' title='Zdjęcia z Szkoły'/>
          <Campus/>
          <Title subTitle='Opinie' title='Co mówią uczniowie?'/>
          <Testimonials/>
          <Title subTitle='Kontakt' title='Bądźmy bliżej'/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}

export default App