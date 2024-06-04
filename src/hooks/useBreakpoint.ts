import { useBreakpointValue } from "@chakra-ui/react";

export const useBreakpoint = () => {
  return useBreakpointValue({
    base: "mobile",
    md: "laptop",
    lg: "desktop",
  });
};
