import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/landingPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path={"/"} >
            <Route path={""} element={<LandingPage />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
