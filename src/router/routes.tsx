import DanhGia from "../pages/DanhGia";
import NotFound from "../pages/NotFound";
import ReviewDetail from "../pages/ReviewDetail";

export const routes = [
  {
    path: "/evaluate",
    element: <DanhGia />,
  },
  {
    path: "/evaluate/:id",
    element: <ReviewDetail />,
  },
  {
    path: "*",
    element: <NotFound />
  }
];
