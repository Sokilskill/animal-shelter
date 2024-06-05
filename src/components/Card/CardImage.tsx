import { Image } from "@chakra-ui/react";

interface CardImageProps {
  imgSrc: string;
  altText: string;
}

export const CardImage: React.FC<CardImageProps> = ({ imgSrc, altText }) => (
  <Image src={imgSrc} alt={altText} h={{ base: "260px", lg: "350px" }} />
);
