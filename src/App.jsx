import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Exercises from "./pages/Exercises"
import ExerciseDetails from "./pages/ExerciseDetails"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



function App() {
 

  return (
    <div className="gradient_bg">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exercises" element={<Exercises/>} />
      <Route path="/exercise/:bodyPart" element={<ExerciseDetails/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
