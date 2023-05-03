import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";


import AddNewDoctor from "./Pages/AddNewDoctor";
import AddNewUser from "./Pages/AddNewUser";
import Login from "./Pages/Login";
import AddNewCollector from "./Pages/AddNewCollector";
import AddNewTest from "./Pages/AddNewTest";
import ReportGroup from "./Pages/ReportGroup";
import ReportFormat from "./Pages/ReportFormat";
import PriceList from "./Pages/PriceList";
import AddCollectorForm from "./Pages/AddCollectorForm";
import AddUserForm from "./Pages/AddUserForm ";
import AddDoctorForm from "./Pages/AddDoctorForm";


const App = () => {
  let  TOKEN = localStorage.getItem('logintoken');
  

  return (
    <BrowserRouter>
      {TOKEN && <Header/>}
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register-doctor" element={<AddNewDoctor/>}/>
        <Route exact path="/register-user" element={<AddNewUser/>}/>
        <Route exact path="/register-collector" element={<AddNewCollector/>}/>
        <Route exact path="/add-doctor" element={<AddDoctorForm/>}/>
        <Route exact path="/add-user" element={<AddUserForm/>}/>
        <Route exact path="/add-collector" element={<AddCollectorForm/>}/>
        <Route exact path="/add-test" element={<AddNewTest/>}/>
        <Route exact path="/add-report-group" element={<ReportGroup/>}/>
        <Route exact path="/add-report-format" element={<ReportFormat/>}/>
        <Route exact path="/add-price-list" element={<PriceList/>}/>
      </Routes>
    </BrowserRouter>
   
  );
};

export default App;
