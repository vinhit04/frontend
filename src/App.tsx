import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Evaluation from "./pages/Evaluation";
import "./App.css";
import Space from "./pages/Space";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/evaluation" />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/space" element={<Space />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
