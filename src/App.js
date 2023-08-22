import './App.css';
import About from './component/About';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
