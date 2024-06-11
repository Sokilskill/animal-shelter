import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

const redColor = "rgba(239, 57, 89, 0.4)";
const blueColor = "rgba(74, 134, 255, 0.4)";

const Background: React.FC = () => {
  const desktopSpots = [
    { color: redColor, top: "718px", right: "138px" },
    { color: redColor, down: "0", right: "32px" },
    { color: redColor, top: "1597px", left: "145px" },
    { color: redColor, top: "3029px", left: "145px" },

    { color: blueColor, top: 0, left: 0 },
    { color: blueColor, top: "492px", right: "578px" },
    { color: blueColor, top: "2300px", left: 0 },
    { color: blueColor, down: "27px", left: "213px" },
    { color: blueColor, down: "1229px", right: "327px" },
  ];

  const tabletSpots = [
    { color: redColor, top: "658px", right: "65px" },
    { color: redColor, top: "1158px", left: "156px" },
    { color: redColor, top: "2870px", left: "123px" },
    { color: redColor, down: "0", right: "0" },

    { color: blueColor, top: 0, left: 0 },
    { color: blueColor, top: "584px", right: "560px" },
    { color: blueColor, top: "1873px", left: "14px" },
    { color: blueColor, down: "1028px", right: "146px" },
    { color: blueColor, down: "60px", left: "190px" },
  ];
  const mobileSpots = [
    { color: redColor, top: "618px", right: "60px" },
    { color: redColor, top: "1486", left: "3px" },
    { color: redColor, top: "2919px", left: "3px" },
    { color: redColor, down: "0", right: "64px" },

    { color: blueColor, top: 0, left: 0 },
    { color: blueColor, top: "618px", left: "42px" },
    { color: blueColor, top: "2100px", right: 0 },
    { color: blueColor, down: "1168px", right: 0 },
    { color: blueColor, down: "48px", left: "57px" },
  ];

  const spots = useBreakpointValue({
    base: mobileSpots,
    md: tabletSpots,
    lg: desktopSpots,
  });

  return (
    <Box
      position="absolute"
      top={{ base: "50px", md: "-257px", lg: "-44px" }}
      left={{ base: "-112px", md: "-320px", lg: "-342px" }}
      w={{ base: "611px", md: "1682px", lg: "2143px" }}
      height={{ base: "5398px", md: "5762px", lg: "6271px" }}
      zIndex={-1}
    >
      {spots?.map((spot, index) => (
        <Box
          key={index}
          position="absolute"
          top={spot.top}
          left={spot.left}
          right={spot.right}
          bottom={spot.down}
          width={{ base: "200px", md: "500px" }}
          height={{ base: "200px", md: "500px" }}
          borderRadius="50%"
          filter={{ base: "blur(80px)", md: "blur(150px)", lg: "blur(200px)" }}
          backgroundColor={spot.color}
        />
      ))}
    </Box>
  );
};

export default Background;
