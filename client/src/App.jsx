import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage'
import Login from './components/Login'
import SignUp from './components/SignUp'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  
  );
}

export default App
