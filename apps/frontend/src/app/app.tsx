import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import { ROUTE } from './routes';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { EmployeesPage } from './pages/EmployeesPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ProtectedRoute } from './components/ProtectedRoute';

export function App() {
  const [user, setUser] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: ROUTE.HOME,
          element: <HomePage />,
        },
        {
          path: ROUTE.ABOUT,
          element: <AboutPage />,
        },
        {
          path: ROUTE.CONTACT,
          element: <ContactPage />,
        },
        {
          path: ROUTE.EMPLOYEES,
          element: <ProtectedRoute user={user} element={<EmployeesPage />} />,
        },
        {
          path: ROUTE.REGISTRATION,
          element: <RegistrationPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
