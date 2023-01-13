import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPasien from "./component/AddPasien";
import EditPasien from "./component/EditPasien";
import NavBar from "./component/NavBar";
import PasienTable from "./component/PasienTable";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PasienTable />} />
        <Route path="addpasien" element={<AddPasien />} />
        <Route path="editpasien/:id" element={<EditPasien />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
