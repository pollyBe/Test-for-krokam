import { MainPage } from "@/pages/MainPage";
import { Layout } from "@/layout/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
