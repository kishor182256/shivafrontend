import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUser from './Pages/AddUser';
import Login from './Pages/Login';


function App() {
  return (
  
    <BrowserRouter>
        <Routes>
            <Route>
              <Route exact path="/" element={<Login/>} />
              <Route exact path="/adduser" element={<AddUser/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
