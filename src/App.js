import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; // Import jQuery
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (<>
    <Navbar/>
    <Home/>
    </>
  );
}

export default App;
