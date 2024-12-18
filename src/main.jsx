import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom';
import Helpcenters from './Component/Helpcenters.jsx';
import Contact from './Component/Contact.jsx';
import About from './Component/About.jsx';
import AddCArt from './Component/AddCArt.jsx';
import Store from './Context/Store.jsx';
import Item from './Component/Item.jsx';
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
    path:"/AddCaRt", 
    element:<AddCArt/>
  },
   {
    path:"/item", 
    element:<Item/>
  },
  {
    path:"/Helpcenter", 
    element:<Helpcenters/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Store>
    <RouterProvider router={router}/>

  </Store>
 

  
)