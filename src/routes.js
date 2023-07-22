import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import SimpleLayout from './layouts/simple';
//pages

import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import ButtonAppBar from './pages/Home';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import BrowersPage from './pages/BrowersPage';

import AddBorrower from './pages/AddBorrower';
import AddLoans from './pages/AddLoans';
import ViewStudent from './pages/ViewStudent';
import LoansPage from './pages/LoansPage';
import AddUser from './pages/AddUser';
import LoanApplicant from './pages/LoanApplicant';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {

      path: 'dashboard',
      element: <ButtonAppBar />,
    
    },

   {
    path: 'db',
    element:< DashboardLayout/>,

    children: [
      { element: <Navigate to="/db/app" />, index: true },
      
      { path: 'app', element: <DashboardAppPage /> },

 

      { path: 'add-user', element: <AddUser /> },
       { path: 'user', element: <UserPage /> },
        { path: 'add-borrower', element: <AddBorrower /> },
        { path: 'add-loan', element: <AddLoans /> },
        { path: 'browers', element: <BrowersPage /> },
        { path: 'Loans', element: <LoansPage /> },
     
     
    ],
   },



  

    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'LoanApplicant',
      element: <LoanApplicant />,
    },
    
    {
      path: 'Home',
      element: <ButtonAppBar />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
