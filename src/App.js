import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';

// Your main logic will be in the Home page.
const App = () =>{
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
