import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import BusResult from './components/BusResult';
import { AuthProvider } from './utils/AuthContext'; // Ensure this path is correct

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/results' element={<BusResult />} />
        {/* <Route path='/bus-detail' element={<BusDetail />} /> */}
      </Route>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
