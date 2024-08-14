import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Register, NotFound } from "./pages/index";
import { ProtectedRoute } from "./components/index";
import Layout from "./Layout";

function App() {

  const Logout = () => {
    localStorage.clear();
    return <Navigate to={"/login"}/>;
  }
  
  const RegisterAndLogout = () => {
    localStorage.clear();
    return <Register />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
