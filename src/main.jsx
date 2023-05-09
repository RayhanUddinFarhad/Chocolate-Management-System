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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
