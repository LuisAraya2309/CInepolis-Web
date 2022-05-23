import '../App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { LoginPage } from './LoginPage/LoginPage';
import { ClientPage } from './ClientPage/ClientPage';
import { SignUp } from './SignUpPage/SignUp';
import { ManageSnackPage } from "./ManageSnacks/ManageSnackPage";

export function App() {
  return (
    <Router>
      <div className='App'>
          <Routes>
              <Route exact path ="/" element={<LoginPage/>}/>

              <Route exact path ="/ClientPage" element={<ClientPage/>}/>

              <Route exact path="/SignUpPage" element={<SignUp />}/>

              <Route exact path="/ManageSnack" element={<ManageSnackPage />}/>

          </Routes>

      </div>
    </Router>
  );
}


