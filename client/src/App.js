import {BrowserRouter,Switch,Route} from "react-router-dom";
import Login from './pages/Login';

import SchoolRegister from './pages/SchoolRegister';
import ParentRegister from './pages/ParentRegister';
import SellerRegister from './pages/SellerRegister';
import Sellerdash from "./pages/Sellerdash";
import SellerdashProduct from "./pages/SellerdashProduct";
import SellerdashOrder from "./pages/SellerdashOrder";


function App() {
  return (  
    <div className="App">
     <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} /> 
          <Route path='/SchoolRegister' exact render={props => <SchoolRegister {...props} />} />
          <Route path='/ParentRegister' exact render={props => <ParentRegister {...props} />} />
          <Route path='/SellerRegister' exact render={props => <SellerRegister {...props} />} />
         
          <Route path='/sellerdashboard' exact render={props => <Sellerdash {...props} />} />
          <Route path='/sellerdashboard/product' exact render={props => <SellerdashProduct {...props} />} />
          <Route path='/sellerdashboard/order' exact render={props => <SellerdashOrder {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
