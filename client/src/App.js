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
import FeedReq from './pages/FeedReq';
import ParentReq from './pages/ParentReq';
import Materials from './pages/Download_Notes'
import Science from './pages/Science'
import Announcement from './pages/Announcement';
import SS from './pages/SS';
import Computer from './pages/Computer'
import Hindi from './pages/Hindi';
import English from './pages/English'
import ForgetPassword from './pages/ForgetPassword'
import TeacherdashStudent from './pages/TeacherdashStudent'
import Teacher_addFeeds from "./components/Teacher_addFeeds";
import TeacheraddVideo from "./pages/TeacheraddVideo"

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
          <Route path='/parentdashboard/announcement' exact render={props => <Announcement {...props} />} />
          <Route path='/parentdashboard/productReq' exact render={props => <ProductReq {...props} />} />
          <Route path='/parentdashboard/feedReq' exact render={props => <FeedReq {...props} />} />
          <Route path='/parentdashboard/material' exact render={props => <Materials {...props} />} />
          <Route path='/parentdashboard/material_science' exact render={props => <Science {...props} />} />
          <Route path='/parentdashboard/material_ss' exact render={props => <SS {...props} />} />
          <Route path='/parentdashboard/material_computer' exact render={props => <Computer {...props} />} />
          <Route path='/parentdashboard/material_hindi' exact render={props => <Hindi {...props} />} />
          <Route path='/parentdashboard/material_english' exact render={props => <English {...props} />} />
          
          <Route path='/teacherDashboard/addAss' exact render={props => <TeacherDashAss {...props} />} />
          <Route path='/teacherDashboard/addstudent' exact render={props => <TeacherdashStudent {...props} />} />
          <Route path='/teacherDashboard/addFeed' exact render={props => <TeacherdashFeeds {...props} />} />
          <Route path='/teacherDashboard/parentReq' exact render={props => <ParentReq {...props} />} />
          <Route path='/teacherDashboard/addVideo' exact render={props => <TeacheraddVideo {...props} />} />
          <Route path='/sellerdashboard/product' exact render={props => <SellerdashProduct {...props} />} />
          <Route path='/sellerdashboard/order' exact render={props => <SellerdashOrder {...props} />} />

          <Route path='/admin/schoolReq' exact render={props => <SchoolReq {...props} />} />
          <Route path='/productReq' exact render={props => <ProductReq {...props} />} />
          <Route path='/NewsFeed' exact render={props => <FeedReq {...props} />} />

          <Route path='/ForgetPassword' exact render={props => <ForgetPassword {...props} />} />

          

          

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
