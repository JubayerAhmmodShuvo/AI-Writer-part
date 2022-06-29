import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Ads from './Pages/ADS/Ads';
import AiWriter from './Pages/AiWriter/AiWriter';

function App() {
  return (
    <div  >
      <AiWriter />
      < Routes>
      <Route path='/home' element={<Home />} ></Route>
      <Route path='/ads' element={<Ads />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
