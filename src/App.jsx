import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Partners from './Pages/Partners';
import BuyPage from './Pages/BuyPage';
import TermsAndConditions from './Pages/Terms';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/buy" element={<BuyPage/>}/>
        <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
      </Routes>
    </Router>
  );
};

export default App;

