import { AboutPage } from './components/About';
import { ContactPage } from './components/Contact';
import { Homepage } from './components/HomePage';
import { NavBar } from './components/Navbar';
import Weather from './components/Weather';
import { Routes, Route} from 'react-router';

function App() {

  return (
    <>
    <NavBar />
    <br />
    <br />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/weather' element={<Weather />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes> 
     
    </>
  )
}

export default App
