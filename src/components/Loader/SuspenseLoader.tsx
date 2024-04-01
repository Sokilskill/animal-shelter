import { Box } from "@chakra-ui/react";
import styles from "./SuspenseLoader.module.css";

export const SuspenseLoader: React.FC = () => {
  return (
    <Box width="100px" pt="calc(100vh / 3)" m="auto">
      <span className={styles.loader}></span>
    </Box>
  );
};
