import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ChoclateTable from './components/ChoclateTable.jsx';
import Add from './components/Add.jsx';
import Update from './components/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children : [

      {
        path: "/",
        element : <ChoclateTable></ChoclateTable>,
        loader : (() => fetch ('http://localhost:5000/chocolate'))
      },

      {

        path : "/add",
        element : <Add></Add>
      },

      {
        path : "/Update/:id",
        element : <Update></Update>,
        loader : ({params}) => fetch (`http://localhost:5000/chocolate/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
