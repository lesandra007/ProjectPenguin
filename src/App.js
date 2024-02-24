import './App.css';
import { Routes, Route } from 'react-router-dom';
/*import Sidebar from "./components/Sidebar";*/
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Questions from "./pages/Questions";
import Hackings from "./pages/Hackings";
import Shop from "./pages/Shop";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/goals" element={ <Goals/> } />
        <Route path="/questions" element={ <Questions/> } />
        <Route path="/hackings" element={ <Hackings/> } />
        <Route path="/shop" element={ <Shop/> } />
      </Routes>
    </div>
  );
}

