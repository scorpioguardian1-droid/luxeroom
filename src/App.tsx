
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoomList from "./pages/RoomList";
import RoomDetail from "./pages/RoomDetail";
import { Toaster } from "./components/ui/sonner";

const App = () => (
  <BrowserRouter>
    <Toaster />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/rooms" element={<RoomList />} />
      <Route path="/rooms/:id" element={<RoomDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
