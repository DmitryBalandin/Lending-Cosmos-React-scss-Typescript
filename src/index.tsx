import { createRoot } from "react-dom/client";
import { App } from './componenets/App';
import { BrowserRouter, } from "react-router-dom";
import React from "react";
import { Suspense } from "react";
import ReactDOM from 'react-dom/client'






// if (!root) {
//    throw new Error('root not found')
// }

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <App />  
   </BrowserRouter>
   
)




// const container = createRoot(root)
// // container.render(<App />);
// const router = createBrowserRouter([
//    {
//       path: "/",
//       element: <App/>,
      
//    },{
//       path:'/Factiion',
//       element:<FactionPage/>
//    },
//    {
//       path:"/Roadmap",
//       element:<RoadMapPage/>
//    }
// ]);

// container.render(
//    <RouterProvider router={router} />
// )
