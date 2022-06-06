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
import { TicketSelection } from './BillboardPage/TicketSelection';
import { AdminPage } from './AdminPage/AdminPage';
import { ManageMoviePage } from './ManageMovies/ManageMoviePage';
import { CreateMovie } from './ManageMovies/CreateMovie';
import { ManageSessionsPage } from './ManageSessions/ManageSessionsPage';
import UpdateSession from './ManageSessions/UpdateSession';
import CreateSession from './ManageSessions/CreateSession';
import { ModifyMovie } from './ManageMovies/ModifyMovie';
import { FindMovie } from './ManageMovies/FindMovie';
import { SnackPage } from './SnackPage/SnackPage';
import { BuySnack } from './SnackPage/BuySnack';
import { ShoppingCar } from './ShoppingCar/ShoppingCarPage';

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

              <Route exact path="/TicketSelection" element={<TicketSelection />}/>

              <Route exact path ="/AdminPage" element={<AdminPage/>}/>

              <Route exact path ="/ManageMovie" element={<ManageMoviePage/>}/>

              <Route exact path ="/CreateMovie" element={<CreateMovie/>}/>

              <Route exact path ="/FindMovie" element={<FindMovie/>}/>

              <Route exact path ="/ModifyMovie" element={<ModifyMovie/>}/>

              <Route exact path="/ManageSessions" element={<ManageSessionsPage />}/>

              <Route exact path="/UpdateSession" element={<UpdateSession />}/>

              <Route exact path="/CreateSession" element={<CreateSession />}/>

              <Route exact path="/Snacks" element={<SnackPage />}/>

              <Route exact path="/BuySnack" element={<BuySnack />}/>
          
              <Route exact path="/ShoppingCar" element={<ShoppingCar />}/>
          </Routes>

      </div>
    </Router>
  );
}


