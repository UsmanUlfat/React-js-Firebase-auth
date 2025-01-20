import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <Home/>
        </ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}
