import './App.css'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './pages/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Location from './components/Location/Location'
import Checkout from "./pages/Checkout/Checkout"
import Hero from './components/Hero/Hero'
function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            <Hero />
              <Menu />
              <About />
              <Contact />
              <Location />
            </>
          } />
          <Route path="/hero" element={<Hero />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<About />} />
          <Route path="*" element={<Menu />} />
        </Routes>

        <Footer />

      </CartProvider>

    </BrowserRouter>
  )
}

export default App
