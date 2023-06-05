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
import AddNewTestForm from "./MasterForms/AddNewTestForm";
import AddReportGroupForm from "./MasterForms/AddReportGroupForm";
import AddPriceListForm from "./MasterForms/AddPriceListForm";
import AddReportFormatForm from "./MasterForms/AddReportFormatForm";
import Patient from "./Pages/Patient";
import PatientInformationForm from "./Pages/AddPatients";
import PatientSample from "./Pages/PatienceSampleCollection";
import EditReportGroupForm from "./MasterForms/EditReportFormatForm";
import PatientCardForm from "./MasterForms/PatientCardForm";
import PatienceCardList from "./Pages/PatienceCardList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const App = () => {

  const [token,setToken] = useState();
  const data = useSelector((state) => state.user.token);
  const TOKEN = localStorage.getItem("logintoken");


  useEffect(()=>{
     setToken(data || TOKEN )
  },[token,TOKEN ])



  return (
    <BrowserRouter>
      {(token || TOKEN) && <Header />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register-doctor" element={<Doctor />} />
        <Route exact path="/register-user" element={<User />} />
        <Route exact path="/register-collector" element={<Collector />} />

        <Route exact path="/add-doctor" element={<AddDoctorForm />} />
        <Route exact path="/add-user" element={<AddUserForm />} />
        <Route exact path="/add-collector" element={<AddCollectorForm />} />
        <Route exact path="/edit-doctor/:id" element={<EditDoctorForm />} />
        <Route exact path="/edit-user/:id" element={<EditUserForm />} />
        <Route
          exact
          path="/edit-collector/:id"
          element={<EditCollectorForm />}
        />

        <Route exact path="/add-test" element={<AddNewTest />} />
        <Route exact path="/add-report-group" element={<ReportGroup />} />
        <Route exact path="/add-report-format" element={<ReportFormat />} />
        <Route exact path="/add-price-list" element={<PriceList />} />

        <Route exact path="/register-new-test" element={<AddNewTestForm />} />
        <Route
          exact
          path="/register-report-group"
          element={<AddReportGroupForm />}
        />
        <Route
          exact
          path="/register-report-format"
          element={<AddReportFormatForm />}
        />

        <Route
          exact
          path="/edit-report-format/:id"
          element={<EditReportGroupForm />}
        />
        <Route
          exact
          path="/register-price-list"
          element={<AddPriceListForm />}
        />

        <Route exact path="/list-patience" element={<Patient />} />
        <Route
          exact
          path="/add-patience"
          element={<PatientInformationForm />}
        />

        <Route
          exact
          path="/patience-cards"
          element={<PatienceCardList />}
        />

<Route
          exact
          path="/add-patience-cards"
          element={<PatientCardForm />}
        />
        <Route exact path="/assign-collector" element={<PatientSample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
