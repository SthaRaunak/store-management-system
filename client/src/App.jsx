import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Users from "./pages/Users"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaulOptions: {
    queries: {
      staleTime : 0,
    }
  }
})


function App() {
  return (
    <>
    <GlobalStyles/>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
    </>
  );
}

export default App;
