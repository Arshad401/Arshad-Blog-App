import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Signin from "./pages/SignIn";
import Signup from "./pages/Signup";
import Header from "./components/Header";


const App = () => {
  return (

 <BrowserRouter>
 <Header />
 <Routes>

  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/signin' element={<Signin />} />
  <Route path='/signup' element={<Signup />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/dashboard" element={<Dashboard />} />
  



 </Routes>
 </BrowserRouter>
 
 )




 
}

export default App
