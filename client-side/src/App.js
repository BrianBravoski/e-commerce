import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './screens/Homescreen'
import ProductDescription from './screens/ProductDescription';

function App() {
  return (
    <div className="App">

      <Navbar />

      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Homescreen/>} />
        <Route path="/product/:id"  element={<ProductDescription />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
