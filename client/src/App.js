import {BrowserRouter,Switch,Route} from "react-router-dom";
import Login from './pages/Login'
import ParentLogin from './pages/ParentLogin';
import TeacherLogin from './pages/TeacherLogin';
import SellerLogin from './pages/SellerLogin';
import AdminDash from './pages/adminDash';

import ParentDash from './pages/ParentDashboard';
import TeacherDash from './pages/TeacherDashboard';
import TeacherDashAss from './pages/TeacherdashAssignment';

import SchoolRegister from './pages/SchoolRegister';
import ParentRegister from './pages/ParentRegister';
import SellerRegister from './pages/SellerRegister';

import Sellerdash from "./pages/Sellerdash";
import SellerdashProduct from "./pages/SellerdashProduct";
import SellerdashOrder from "./pages/SellerdashOrder";
import TeacherdashFeeds from "./pages/TeacherdashFeeds";
import SchoolReq from './pages/SchoolReq';
import ProductReq from './pages/ProductReq';
import Teacher_addFeeds from "./components/Teacher_addFeeds";

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
          <Route path='/teacherDashboard/addAss' exact render={props => <TeacherDashAss {...props} />} />
          <Route path='/teacherDashboard/addFeed' exact render={props => <TeacherdashFeeds {...props} />} />
         
          <Route path='/sellerdashboard/product' exact render={props => <SellerdashProduct {...props} />} />
          <Route path='/sellerdashboard/order' exact render={props => <SellerdashOrder {...props} />} />

          <Route path='/admin/schoolReq' exact render={props => <SchoolReq {...props} />} />
          <Route path='/admin/productReq' exact render={props => <ProductReq {...props} />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
