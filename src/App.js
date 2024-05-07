import './App.css';
import { Routes, Route } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';
// import { UserComponent } from './UserComponent';
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Questions from "./pages/Questions";
import Hackings from "./pages/Hackings";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Exercise1 from "./pages/Exercise1"; // Import your exercise components
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3"; // Import your exercise components
import Exercise4 from "./pages/Exercise4";
import Exercise5 from "./pages/Exercise5";

const PARSE_APPLICATION_ID = 'uxbSw1SWF2XVW0p0O2nf46VkGofbCdIZhUXoSEQ4';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'TIMs6P2ERIKQgy6JG7bN8SPXwzGJJfJiRTeSUbMe';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export default function App() {

  return (
    <div className="App">
      {/* <UserComponent /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/hackings" element={<Hackings />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/hackings/exercise1" element={<Exercise1 />} />
        <Route path="/hackings/exercise2" element={<Exercise2 />} />
        <Route path="/hackings/exercise3" element={<Exercise3 />} />
        <Route path="/hackings/exercise4" element={<Exercise4 />} />
        <Route path="/hackings/exercise5" element={<Exercise5 />} />
      </Routes>
    </div>
  );
}
