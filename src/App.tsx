import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/Mainlayout";
import { routes } from "./router/routes";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map((r, i) => (
            <Route key={i} path={r.path} element={r.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
