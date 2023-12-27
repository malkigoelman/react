import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './user/home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<login />} />
        <Route path="/Sigin" element={<sigin />} />
        <Route path="/addRecipe" element={<addRecipe />} />
        <Route path="/getCategory" element={<getCategory />} />
        <Route path="AllRecipe/" element={<allRecipe />} />
        {/* <Route path="/" element={<Home/>}/> */}

      </Routes>
    </>
  );
}

export default App;
