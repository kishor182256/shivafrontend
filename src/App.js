import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";


import AddNewDoctor from "./Pages/AddNewDoctor";
import AddNewUser from "./Pages/AddNewUser";
import CollectorForm from "./Pages/CollectorForm";
import Login from "./Pages/Login";
import AddNewCollector from "./Pages/AddNewCollector";
import AddNewTest from "./Pages/AddNewTest";


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register-doctor" element={<AddNewDoctor/>}/>
        <Route exact path="/register-user" element={<AddNewUser/>}/>
        <Route exact path="/register-collector" element={<AddNewCollector/>}/>
        <Route exact path="/add-test" element={<AddNewTest/>}/>

      </Routes>
    </BrowserRouter>
    /* <CollectorForm/> */
   
  );
};

export default App;
