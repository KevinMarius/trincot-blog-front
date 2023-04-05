//import logo from './logo.svg';
import React, { Suspense, lazy } from "react";
import "./App.css";
import "./assets/Sidebar.css"
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import LoadingSpinner from "./components/UiElement/loadingSpinner";
/* import Login from "./pages/SignIn"; */


const UserRoute = React.lazy(() => import("./routes/userRoutes"));
const AdminRoute = React.lazy(() => import("./routes/adminRoutes"));
const Login = React.lazy(() => import("./pages/SignIn"));

export default function App() {

  return (
    <React.Fragment>
      <Suspense 
        fallback={
          <div className="center">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<UserRoute />} />
          <Route path="signIn" element={<Login />} />
          <Route path="dashboard/*" element={
            <AuthProvider>
              <AdminRoute />
            </AuthProvider>
          } />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

