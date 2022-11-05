import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
