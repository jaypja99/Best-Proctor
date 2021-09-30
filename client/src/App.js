import {BrowserRouter,Switch,Route} from "react-router-dom";
import Login from './pages/Login';

import SchoolRegister from './pages/SchoolRegister';
import ParentRegister from './pages/ParentRegister';
import SellerRegister from './pages/SellerRegister';
import Sellerdash from "./pages/Sellerdash";

import Rg from './components/Upload_Achive'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} /> 
          <Route path='/SchoolRegister' exact render={props => <SchoolRegister {...props} />} />
          <Route path='/ParentRegister' exact render={props => <ParentRegister {...props} />} />
          <Route path='/SellerRegister' exact render={props => <SellerRegister {...props} />} />
          <Route path='/register' exact render={props => <Rg {...props} />} />
          <Route path='/sellerdashboard' exact render={props => <Sellerdash {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
