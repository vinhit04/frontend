import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Evaluation from "./pages/Evaluation";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainLayout />} /> */}
          <Route path="/evaluation" element={<Evaluation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
