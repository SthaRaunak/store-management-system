import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/dashboard" />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
