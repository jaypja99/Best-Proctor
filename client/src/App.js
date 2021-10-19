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
import Sellerdash_product from "./pages/Sellerdash_prodcut";



function App() {
  return (  
    <div className="App">
     <BrowserRouter>
        <Switch>
          <Route path='/' exact component={ParentLogin} /> 
          <Route path='/teacherLogin' exact render={props => <TeacherLogin {...props} />} />
          <Route path='/sellerLogin' exact render={props => <SellerLogin {...props} />} />

          <Route path='/SchoolRegister' exact render={props => <SchoolRegister {...props} />} />
          <Route path='/ParentRegister' exact render={props => <ParentRegister {...props} />} />
          <Route path='/SellerRegister' exact render={props => <SellerRegister {...props} />} />
         
          <Route path='/admin' exact render={props => <Login {...props} />} />
          <Route path='/adminDash' exact render={props => <AdminDash {...props} />} />
          <Route path='/sellerDashboard' exact render={props => <Sellerdash {...props} />} />
          <Route path='/parentDashboard' exact render={props => <ParentDash {...props} />} />
          <Route path='/teacherDashboard' exact render={props => <TeacherDash {...props} />} />

          <Route path='/sellerdashboard/product' exact render={props => <Sellerdash_product {...props} />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
