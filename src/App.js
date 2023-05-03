import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";



import Login from "./Pages/Login";
import AddNewTest from "./Pages/AddNewTest";
import ReportGroup from "./Pages/ReportGroup";
import ReportFormat from "./Pages/ReportFormat";
import PriceList from "./Pages/PriceList";
import AddCollectorForm from "./Pages/AddCollectorForm";
import AddUserForm from "./Pages/AddUserForm ";
import AddDoctorForm from "./Pages/AddDoctorForm";
import EditDoctorForm from "./Pages/EditDoctorForm";
import EditUserForm from "./Pages/EditUserForm";
import EditCollectorForm from "./Pages/EditCollectorForm";
import Doctor from "./Pages/Doctor";
import User from "./Pages/User";
import Collector from "./Pages/Collector";


const App = () => {
  let  TOKEN = localStorage.getItem('logintoken');
  

  return (
    <BrowserRouter>
      {TOKEN && <Header/>}
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register-doctor" element={<Doctor/>}/>
        <Route exact path="/register-user" element={<User/>}/>
        <Route exact path="/register-collector" element={<Collector/>}/>
        <Route exact path="/add-doctor" element={<AddDoctorForm/>}/>
        <Route exact path="/add-user" element={<AddUserForm/>}/>
        <Route exact path="/add-collector" element={<AddCollectorForm/>}/>
        <Route exact path="/edit-doctor/:id" element={<EditDoctorForm/>}/>
        <Route exact path="/edit-user/:id" element={<EditUserForm/>}/>
        <Route exact path="/edit-collector/:id" element={<EditCollectorForm/>}/>
        <Route exact path="/add-test" element={<AddNewTest/>}/>
        <Route exact path="/add-report-group" element={<ReportGroup/>}/>
        <Route exact path="/add-report-format" element={<ReportFormat/>}/>
        <Route exact path="/add-price-list" element={<PriceList/>}/>
      </Routes>
    </BrowserRouter>
   
  );
};

export default App;
