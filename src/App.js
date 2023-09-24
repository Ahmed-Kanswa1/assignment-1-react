import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import MainLayout from './Components/Layout/MainLayout';
import { createBrowserRouter,createHashRouter,RouterProvider } from 'react-router-dom';
import Porto from './Components/Porto/Porto';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
// import MainLayout from './Components/Layout/MainLayout';


function App() {
  let routes=createBrowserRouter([
    {
      path:'/',element: <MainLayout/>,children:[
      {path:'',element: <Home />},
      {path:'home',element: <Home />},
      {path:'about',element: <About/>},
      {path:'porto',element: <Porto/>},
      {path:'contact',element: <Contact/>},
      {path:'*',element: <NotFound/>}
    ],
  }
   
  ])
  return (
   <>
   
   {/* <NavBar /> */}
  
  
   <RouterProvider router={routes} />
   <Footer />





   </>
  );
}

export default App;
