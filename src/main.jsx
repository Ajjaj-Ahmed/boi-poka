import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorElement from './components/ErrorElement/ErrorElement';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/dashboard",
        element:<DashBoard></DashBoard>
      },
      {
        path:"books/:bookId",
        loader:()=>fetch('/booksData.json'),
        element:<BookDetails></BookDetails>
      },
      {
        path:'listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch(`/booksData.json`)
      }
      
    ]
  }
  
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
