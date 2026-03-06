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
import Login from './pages/login/Login';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminNavbar from './pages/adminPanel/AdminNavbar'
import { Navigate } from "react-router-dom";
import Dashboard from './pages/adminPanel/Dashboard'
function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <BrowserRouter>
      <CartProvider>
        {user?.role === "ADMIN"
          ? <AdminNavbar />
          : <Navbar />
        }
        <Routes>
          <Route path="/" element={
            user?.role?.toUpperCase() === "ADMIN"
              ? <Navigate to="/admin" />
              :
              <>
                <Hero />
                <Menu />
                <About />
                <Contact />
                <Location />
              </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<About />} />
          <Route path="*" element={<Menu />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

        {user?.role !== "ADMIN" && <Footer />}

      </CartProvider>

    </BrowserRouter>
  )
}

export default App
