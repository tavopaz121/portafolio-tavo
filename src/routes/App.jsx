import Home from "../pages/Home";
import { Route, Routes, Outlet } from "react-router-dom";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="inicio" element={<Home />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
