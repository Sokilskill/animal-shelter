import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SuspenseLoader } from "./components/Loader/SuspenseLoader";

const LandingPage = lazy(() => import("./pages/LandingPage"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <LandingPage />
          </Suspense>
        }
      />
      <Route path="*" element={<p> 404 Page not found... </p>} />
    </Routes>
  );
};

export default App;
