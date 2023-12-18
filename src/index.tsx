import { createRoot } from "react-dom/client";
import { App } from './componenets/App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Suspense } from "react";


const root = document.getElementById('root');

if (!root) {
   throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
   {
      path: "/",
      element: <App/>,
      
   },
]);

container.render(
   <RouterProvider router={router} />
)
