import CyclicalPoints from "../pages/CyclicalPoints";
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
    path: "/evaluate/:id/cyclicalpoints/:id",
    element: <CyclicalPoints />,
  },
  {
    path: "*",
    element: <NotFound />
  }
];
