import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Exam from "./pages/Exam.jsx";
import { BrowserRouter, Route, Navigate, Routes, useNavigate } from "react-router-dom";
import StudentHome from "./pages/StudentHome.jsx";
import Main from "./pages/Main.jsx";
import Type from "./pages/Type.jsx";
import OrganizerHome from "./pages/OrganizerHome.jsx";
import Preexam from "./pages/Preexam.jsx";
import { useSelector } from "react-redux";


function App() {
  const currentUser = useSelector((state) => state.data.user);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        {/* <Route exact path="/student" element={<StudentHome />} />
        <Route exact path="/organizer" element={<OrganizerHome />} /> */}
        <Route path="/login" element={(currentUser?.user === null || currentUser?.user === "undefined" ? <Login/> : <Navigate to ='/home' />)} />
        <Route path="/userType/login" element={<Type id="login" />} />
        <Route path="/userType/register" element={<Type id="register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student/exam" element={<Exam />} />
        <Route path="/student/preexam" element={<Preexam />} />
        <Route path="/home" element={(currentUser?.type === "organizer" ? <OrganizerHome /> : <StudentHome />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
