import {Routes,Route} from 'react-router-dom';
import './App.css'
import { Navbar } from './Navbar';
import {Home} from './Home';
import { Awards } from './Awards and Achievements';
function App() {
  return (
  <>
    
    <title>Dhineshkumar</title>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='Awards and Achievements' element={<Awards />} />
      </Routes>
  </>
  );
}

export default App;
