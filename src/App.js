import './App.css';
import About from './component/About';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">
      <NavigationBar />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
