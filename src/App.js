import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";


import AddNewDoctor from "./Pages/AddNewDoctor";
import AddNewUser from "./Pages/AddNewUser";
import CollectorForm from "./Pages/CollectorForm";
import Login from "./Pages/Login";


const App = () => {
  return (
    /* <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register-doctor" element={<AddNewDoctor/>}/>
        <Route exact path="/register-user" element={<AddNewUser/>}/>
      </Routes>
    </BrowserRouter> */
    /* <CollectorForm/> */
    <>
      <Header/>
    </>
  );
};

export default App;
