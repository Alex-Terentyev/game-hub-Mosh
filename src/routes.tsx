import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GameGrid from "./components/GameGrid";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
