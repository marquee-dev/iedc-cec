import './App.css';
import Home from './components/Home';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Idea from './components/Idea';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Idea/>} path='/idea' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
