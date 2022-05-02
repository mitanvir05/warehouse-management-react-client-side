import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./Pages/Blogs/Blogs/Blogs";
import InventoryDetail from "./Pages/InventoryDetail/InventoryDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:_id"
          element={<InventoryDetail></InventoryDetail>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
