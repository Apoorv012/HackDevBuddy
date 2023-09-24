import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Exam from "./pages/Exam.jsx";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import StudentHome from "./pages/StudentHome.jsx";
import Main from "./pages/Main.jsx";
import Type from "./pages/Type.jsx";
import OrganizerHome from "./pages/OrganizerHome.jsx";
import Preexam from "./pages/Preexam.jsx";

function App() {
  // const user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/student" element={<StudentHome />} />
        <Route exact path="/organizer" element={<OrganizerHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userType/login" element={<Type id="login" />} />
        <Route path="/userType/register" element={<Type id="register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student/exam" element={<Exam />} />
        <Route path="/student/preexam" element={<Preexam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
