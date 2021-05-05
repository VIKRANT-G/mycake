// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import forgot from "./Components/forgot";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Cake from "./Components/Cake";
import Search from "./Components/Search";
import { ToastContainer, toast } from "react-toastify";
import Data from "./Components/Data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div>
          <Route path="/login" exact component={Login} />
          <Route path="/forgot" exact component={forgot} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Cake" exact component={Cake} />
          <Route path="/Search" exact component={Search} />
        </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
