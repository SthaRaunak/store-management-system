import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Users from "./pages/Users"
function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/dashboard" />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/users" element={<Users/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
