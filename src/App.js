import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements
} from "react-router-dom";
import Page1 from './Website/Page1';
import Page3 from './Website/Page3';
import Page2 from './Website/Page2';
import Nav from './Website/Nav';
import { Outlet } from 'react-router-dom';


const router=createBrowserRouter(
  createRoutesFromElements(<>
    <Route path="/" element={<Nav />}   >
  
      {/* <Route path="" /> */}
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
      <Route path="page3" element={< Page3/>} />
      </Route>
  </>
   
  )
);


function App() {
  return (
    <div className="App">
         <RouterProvider router={router} />

      <Outlet/>

    </div>
  );
}

export default App;
