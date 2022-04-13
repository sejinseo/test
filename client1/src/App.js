import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Register from "./components/views/RegisterPage/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
       
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<Register/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;