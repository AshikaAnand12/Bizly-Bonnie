import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ChatbotPage from './components/ChatbotPage/ChatbotPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/chat" element={<ChatbotPage/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
