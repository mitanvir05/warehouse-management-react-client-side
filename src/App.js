import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./Pages/Blogs/Blogs/Blogs";
import InventoryDetail from "./Pages/InventoryDetail/InventoryDetail";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageInventory from "./Pages/Home/Inventory/ManageInventory/ManageInventory";
import AddItem from "./Pages/Home/Inventory/AddItem/AddItem";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:_id"
          element={
            <RequireAuth>
              <InventoryDetail></InventoryDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage_inventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="add_item" element={<AddItem></AddItem>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
