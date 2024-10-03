import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SuspenseLoader } from "./components/Loader/SuspenseLoader";
import Background from "./components/Background/Background";
import { Box } from "@chakra-ui/react";

const LandingPage = lazy(() => import("./pages/LandingPage"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Box overflow-x={"hidden"}>
              <Box
                w={{ base: "375px", md: "1024px", lg: "1440px" }}
                position="relative"
                minHeight="100vh"
                mx="auto"
              >
                <Background />

                <LandingPage />
              </Box>
            </Box>
          </Suspense>
        }
      />
      <Route path="*" element={<p> 404 Page not found... </p>} />
    </Routes>
  );
};

export default App;
