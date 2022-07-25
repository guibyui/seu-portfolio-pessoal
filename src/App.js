import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import MyServicesPage from "./pages/MyServicesPage";
import AboutMePage from "./pages/AboutMePage";
import LetsTalkPage from "./pages/LetsTalkPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/my-services" element={<MyServicesPage />} />
      <Route path="/about-me" element={<AboutMePage />} />
      <Route path="/lets-talk" element={<LetsTalkPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
