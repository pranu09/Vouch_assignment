import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './components/LoginDemo/LoginPage';
import Sidebar from './components/Sidebar/Sidebar';
import NewClientAdd from './components/AddClientSuccess/AddClientSuccess';
import CreateProfileComponent from './components/CreateProfile/CreateProfile_component';
import ModuleSetupComponent from './components/ModuleSetup/ModuleSetup_component';
import PaymentPlanComponent from './components/PaymentPlan/PaymentPlan_component';
// import LoginPage from './components/LoginDemo/LoginPage'
import AddClient from './components/AddClient/AddClient';
import AddClientSuccess from './components/AddClientSuccess/AddClientSuccess';
import ViewAllClient from './components/ViewAllClient/ViewAllClient';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const  App = () => {

  const ProtectedRoute = ({ children }) => {
    if (!localStorage.getItem('token')) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const Layout = () => {
    return (
      <div className='container-fluid'>
       <div className="row">
       <div className="col-lg-3 m-0 p-0">
         <Sidebar/>
         </div>
         <div className="col-lg-9 m-0 px-3 pt-3 outlet">
          <Outlet />
         </div>
       </div>
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path:"/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children:[
        {
          path:"/",
          element:< ViewAllClient/>
        },
        {
          path:"/add_client_success",
          element:< AddClientSuccess/>
        },
        {
          path:"/add_client",
          element:< AddClient/>
        },
      ]
    },
    {
      path:"/login",
      element:< LoginPage />
    },
  ]);
 
    return (<>
     <RouterProvider router={router}/>
     <ToastContainer />
     </>
    )
}

export default App;
