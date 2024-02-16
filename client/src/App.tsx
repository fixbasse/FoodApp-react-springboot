
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage"
import Navbar from "./components/navbar/Navbar"
import PaymentPage from "./pages/PaymentPage/PaymentPage"

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
      </Routes>
    </>
  )
}

export default App
