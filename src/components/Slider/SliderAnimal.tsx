import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Animal } from "../../types"; // імпорт через index.ts
import { Card } from "../Card";

import "swiper/swiper-bundle.css";

interface SliderProps {
  animals: Animal[];
}

export const Slider: React.FC<SliderProps> = ({ animals }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={"auto"}
      centeredSlides={false}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
    >
      {animals.map((animal) => (
        <SwiperSlide key={animal.id} style={{ width: "223px" }}>
          <Card item={animal} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
