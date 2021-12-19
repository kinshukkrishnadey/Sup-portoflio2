import './App.css';
import Footer from './Footer';
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import Main from './Main';
import Ethnic from './Ethnic';


function App() {
  return (
    <div className="App">
     <Home/>
     <Routes>
        <Route path="/" element={<Main/>} />  
        <Route path="ethnic" element={<Ethnic/>} /> 
        </Routes>
     <Footer />
    </div>
  );
}

export default App;
