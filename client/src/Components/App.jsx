import '../App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { LoginPage } from './LoginPage/LoginPage';
import { ClientPage } from './ClientPage/ClientPage';

export function App() {
  return (
    <Router>
      <div className='App'>
          <Routes>
              <Route exact path ="/" element={<LoginPage/>}/>

              <Route exact path ="/ClientPage" element={<ClientPage/>}/>

          </Routes>

      </div>
    </Router>
  );
}


