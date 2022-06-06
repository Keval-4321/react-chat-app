import './App.css';
import ChatList from './components/ChatList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Default from './layouts/Default';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Default />}>
            <Route path='/' element={<ChatList />}>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
