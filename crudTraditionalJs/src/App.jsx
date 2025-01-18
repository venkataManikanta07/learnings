import "./App.css";
import StudentData from "./components/StudentData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/EditStudent";
import ViewStudent from "./components/ViewStudent";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentData />}></Route>
        <Route path="/create" element={<CreateStudent />}></Route>
        <Route path="/student/:studentId" element={<ViewStudent />}></Route>
        <Route path="/edit/:studentid" element={<EditStudent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
