import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../../AppLayout";
import { HomePageAsync } from "@/pages/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePageAsync />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
