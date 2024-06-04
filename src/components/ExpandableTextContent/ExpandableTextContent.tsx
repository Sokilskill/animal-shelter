import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ExpandableTextContentProps {
  text: ReactNode;
  isExpanded: boolean;
}

const ExpandableTextContent: React.FC<ExpandableTextContentProps> = ({
  text,
  isExpanded,
}) => {
  const textStyles = {
    display: "-webkit-box",
    WebkitLineClamp: isExpanded ? "none" : { base: 9, md: 15 },
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: { md: "24px" },
    fontWeight: { md: "500" },
    height: isExpanded ? "auto" : { base: "220px", md: "330px" },
  };

  return <Text sx={textStyles}>{text}</Text>;
};

export default ExpandableTextContent;
