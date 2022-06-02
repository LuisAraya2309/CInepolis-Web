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
import { CreateSnack } from "./ManageSnacks/CreateSnack";
import { ModifySnack } from "./ManageSnacks/ModifySnacks";
import { Billboard } from './BillboardPage/Billboard';
import { Tickets } from './BillboardPage/Tickets';
import { ManageClientPage } from "./ManageClients/ManageClientPage";
import { CreateClient } from "./ManageClients/CreateClient";
import { ModifyClient } from "./ManageClients/ModifyClient";
import { CreateCreditCard } from "./ManageCreditCard/CreateCreditCard";
import { ManageCreditCardPage } from "./ManageCreditCard/ManageCreditCardPage";

export function App() {
  return (
    <Router>
      <div className='App'>
          <Routes>
              <Route exact path ="/" element={<LoginPage/>}/>

              <Route exact path ="/ClientPage" element={<ClientPage/>}/>

              <Route exact path="/SignUpPage" element={<SignUp />}/>

              <Route exact path="/ManageSnack" element={<ManageSnackPage />}/>

              <Route exact path="/CreateSnack" element={<CreateSnack />}/>

              <Route exact path="/ModifySnack" element={<ModifySnack />}/>

              <Route exact path="/Billboard" element={<Billboard />}/>

              <Route exact path="/Tickets" element={<Tickets />}/>

              <Route exact path="/CreateClient" element={<CreateClient />}/>

              <Route exact path="/ModifyClient" element={<ModifyClient />}/>

              <Route exact path="/ManageClient" element={<ManageClientPage />}/>

              <Route exact path="/ManageCreditCard" element={<ManageCreditCardPage />}/>

              <Route exact path="/CreateCreditCard" element={<CreateCreditCard />}/>

          </Routes>

      </div>
    </Router>
  );
}


