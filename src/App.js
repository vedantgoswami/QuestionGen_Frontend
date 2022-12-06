
import './App.css';
import Header from './components/Header'
import FrontendPage from './pages/FrontendPage'
import QuestionPage from './pages/QuestionPage';
import NotesPage from './pages/NotesPage';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
      
      <div className="App">
        
        <Routes>
          <Route path="/" exact element={<FrontendPage/>}/>
          <Route path="note" exact element={<NotesPage/>}/>
          <Route path="question" exact element={<QuestionPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
