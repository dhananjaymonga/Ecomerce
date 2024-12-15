import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom';
import Helpcenters from './Component/Helpcenters.jsx';
import Contact from './Component/Contact.jsx';
import About from './Component/About.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/About", 
    element:<About/>
  },
  {
    path:"/Contact", 
    element:<Contact/>
  },
  {
    path:"/Helpcenter", 
    element:<Helpcenters/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>

  
)