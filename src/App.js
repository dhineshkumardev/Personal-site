import {Routes,Route} from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import {Home} from './Home';
import { Awards } from './Awards and Achievements';
function App() {
  return (
  <>
    

    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='Awards-and-Achievements' element={<Awards />} />
      </Routes>
  </>
  );
}

export default App;
