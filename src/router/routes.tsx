import CyclicalPoints from "../pages/CyclicalPoints";
import DanhGia from "../pages/DanhGia";
import NotFound from "../pages/NotFound";
import ReviewDetail from "../pages/ReviewDetail";
import AIAutoPoint from "../pages/AIAutoPoint";
import RankPoint from "../components/RankPoint";
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
    element: <NotFound />,
  },
  {
    path: "/evaluate/:id/aiautopoint/:id",
    element: <AIAutoPoint />,
  },
  {
    path: "/evaluate/:id/rankpoint/:id",
    element: <RankPoint />,
  }
];
