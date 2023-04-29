import { BrowserRouter, Routes, Route } from "react-router-dom";


import AddNewDoctor from "./Pages/AddNewDoctor";
import AddNewUser from "./Pages/AddNewUser";
import Login from "./Pages/Login";
import AddNewCollector from "./Pages/AddNewCollector";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register-doctor" element={<AddNewDoctor/>}/>
        <Route exact path="/register-user" element={<AddNewUser/>}/>
        <Route exact path="/register-collector" element={<AddNewCollector/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
