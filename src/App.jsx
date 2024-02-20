import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Modules/Home';

const About = () => <div>Partneriai</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partneriai" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

