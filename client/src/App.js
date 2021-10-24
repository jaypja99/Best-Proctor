import {BrowserRouter,Switch,Route} from "react-router-dom";
import Login from './pages/Login'
import ParentLogin from './pages/ParentLogin';
import TeacherLogin from './pages/TeacherLogin';
import SellerLogin from './pages/SellerLogin';
import AdminDash from './pages/adminDash';

import ParentDash from './pages/ParentDashboard';
import TeacherDash from './pages/TeacherDashboard';

import SchoolRegister from './pages/SchoolRegister';
import ParentRegister from './pages/ParentRegister';
import SellerRegister from './pages/SellerRegister';

import Sellerdash from "./pages/Sellerdash";
import SellerdashProduct from "./pages/SellerdashProduct";
import SellerdashOrder from "./pages/SellerdashOrder";

import SchoolReq from './pages/SchoolReq'

function App() {
  return (  
    <div className="App">
     <BrowserRouter>
        <Switch>
          <Route path='/' exact component={ParentLogin} /> 
          <Route path='/teacherLogin' exact render={props => <TeacherLogin {...props} />} />
          <Route path='/sellerLogin' exact render={props => <SellerLogin {...props} />} />
          <Route path='/admin' exact render={props => <Login {...props} />} />

          <Route path='/SchoolRegister' exact render={props => <SchoolRegister {...props} />} />
          <Route path='/ParentRegister' exact render={props => <ParentRegister {...props} />} />
          <Route path='/SellerRegister' exact render={props => <SellerRegister {...props} />} />

          <Route path='/AdminDash' exact render={props => <AdminDash {...props} />} />
          <Route path='/sellerdashboard' exact render={props => <Sellerdash {...props} />} />
          <Route path='/parentdashboard' exact render={props => <ParentDash {...props} />} />
          <Route path='/teacherDashboard' exact render={props => <TeacherDash {...props} />} />
         
          <Route path='/sellerdashboard/product' exact render={props => <SellerdashProduct {...props} />} />
          <Route path='/sellerdashboard/order' exact render={props => <SellerdashOrder {...props} />} />

          <Route path='/admin/schoolReq' exact render={props => <SchoolReq {...props} />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
