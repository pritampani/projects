import CountryDetails from './pages/CountryDetails';
import './app.css';
import Home from "./pages/Home";
import { BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';
function App(){
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/countries/:countryCode' element= {<CountryDetails/>}/>
            <Route path = '*' element = {<h1>404 NOT FOUND</h1>}/>
        
        </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
