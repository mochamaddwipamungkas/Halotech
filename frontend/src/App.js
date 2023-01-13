import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBaby from "./component/AddBaby";
import AddPasien from "./component/AddPasien";
import BabyTable from "./component/BabyTable";
import EditBaby from "./component/EditBaby";
import EditPasien from "./component/EditPasien";
import NavBar from "./component/NavBar";
import PasienTable from "./component/PasienTable";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PasienTable />} />
        <Route path="/baby" element={<BabyTable />} />
        <Route path="/addbaby" element={<AddBaby />} />
        <Route path="/addpasien" element={<AddPasien />} />
        <Route path="/editpasien/:id" element={<EditPasien />} />
        <Route path="/editbaby/:id" element={<EditBaby />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
