import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPasien from "./component/AddPasien";
import DataPasien from "./component/DataPasien";
import EditPasien from "./component/EditPasien";
import NavBar from "./component/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<DataPasien />} />
        <Route path="/addpasien" element={<AddPasien />} />
        <Route path="/editpasien/:id" element={<EditPasien />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
