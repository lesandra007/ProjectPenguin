import './App.css';
import { Routes, Route } from 'react-router-dom';
/*import Sidebar from "./components/Sidebar";*/
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Questions from "./pages/Questions";
import Hackings from "./pages/Hackings";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route index element={ <Login/> } /> */}
        {/* <Route index element={ <Home/> } /> */}
        <Route path="/" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/goals" element={ <Goals/> } />
        <Route path="/questions" element={ <Questions/> } />
        <Route path="/hackings" element={ <Hackings/> } />
        <Route path="/shop" element={ <Shop/> } />
      </Routes>
    </div>
  );
}

