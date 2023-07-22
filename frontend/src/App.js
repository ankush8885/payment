import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HOME from "./HOME"
import Paymentsuccess from './paymentsuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HOME />}/>
        <Route path='/paymentsuccess' element={<Paymentsuccess />}/>

      </Routes>
    </Router>
  );
}

export default App;
