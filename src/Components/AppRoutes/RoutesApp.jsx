import {  Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers/Customers";
import Dashboard from "../../Pages/Dashbaord/Dashboard";
import Inventory from "../../Pages/Inventory/Inventory";
import Orders from "../../Pages/Orders/Orders";

function RoutesApp() {
  return (
   <Routes>
     <Route path="/" element={<Dashboard/>} />
       <Route path="/customers" element={<Customers/>} />
       <Route path="/inventory" element={<Inventory/>} />
       <Route path="/orders" element={<Orders/>} />

   </Routes>
  );
}
export default RoutesApp;
