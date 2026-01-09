import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/Mainlayout";
import { menuItems } from "./router";
export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <MainLayout />
          }>
            <Route index element={<Navigate to="/" replace />} />
            {menuItems.map(({ url, element }, index) => (
              <Route key={index} path={url} element={element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
