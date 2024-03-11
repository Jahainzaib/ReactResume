import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; // Import jQuery
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import HRMS from './Components/HRMS';


function App() {
  return (<>
    <Navbar/>
      <Home />  
    {/* <Home/> */}
    </>
  );
}

export default App;
