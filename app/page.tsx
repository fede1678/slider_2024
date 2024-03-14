"use client";

import { Arrows } from "@/components/widgets/arrows";
import { SliderItem } from "@/components/widgets/slider-item";
import { SliderThumbnailItem } from "@/components/widgets/slider-thumbnail-item";
import { useState } from "react";

export default function Home() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onPrev = () => {
    setItemActive(itemActive - 1);
    if (itemActive === 1) {
      setItemActive(countItems);
    }
  };

  const onNext = () => {
    setItemActive(itemActive + 1);
    if (itemActive >= countItems) {
      setItemActive(1);
    }
  };

  return (
    <div className="h-screen relative">
      <ul>
        <SliderItem
          itemActive={itemActive}
          id={1}
          image="/imgs/auto1.jpg"
          brand="BMW"
          name="Serie 3"
          desc="The BMW 3 Series is a compact luxury car renowned for its sporty performance, premium interior, and cutting-edge technology.
          With a reputation for dynamic driving dynamics and refined comfort, 
          the 3 Series offers a balance of exhilarating driving experience and upscale amenities."
        />
        <SliderItem
          itemActive={itemActive}
          id={2}
          image="/imgs/auto2.jpg"
          brand="Nissan"
          name="Versa"
          desc="The Nissan Versa is a compact car known for its modern design, spacious interior, and fuel efficiency.
          Equipped with advanced technology and safety features, the Versa offers a combination of style,
          functionality, and affordability in its segment."
        />
        <SliderItem
          itemActive={itemActive}
          id={3}
          image="/imgs/auto3.jpg"
          brand="Ford"
          name="Territory"
          desc="The Ford Territory is a mid-size SUV known for its spacious interior, comfortable ride, and advanced technology features.
          Offering ample cargo space and versatile seating options, the Territory is designed to provide both practicality and comfort for drivers and passengers alike.
          With modern styling and a range of safety features, it offers a compelling option in the SUV market."
        />
        <SliderItem
          itemActive={itemActive}
          id={4}
          image="/imgs/auto4.jpg"
          brand="Subaru"
          name="XV"
          desc="The Subaru XV is a compact crossover SUV recognized for its capable all-wheel-drive system, rugged styling, and versatile design.
          Offering a blend of off-road capability and urban agility, the XV appeals to adventurous drivers seeking a versatile vehicle for various terrains and weather conditions.
          With Subaru's renowned reliability and safety features, the XV provides peace of mind for both daily commuting and weekend excursions."
        />
        <SliderItem
          itemActive={itemActive}
          id={5}
          image="/imgs/auto5.jpg"
          brand="Mercedes-Benz"
          name="EQA"
          desc="The Mercedes-Benz EQA is an all-electric compact luxury SUV characterized by its sleek design, advanced technology, and zero-emission driving.
          As part of the EQ family, it embodies Mercedes-Benz's commitment to sustainable mobility while offering the refinement and luxury expected from the brand.
          With impressive performance, long-range capabilities, and a premium interior, the EQA represents the future of electric luxury vehicles."
        />
      </ul>
      <Arrows onClickPrev={() => onPrev()} onClickNext={() => onNext()} />
      <ul className="absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto">
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/imgs/auto1.jpg"
          id={1}
          name="Serie 3"
          onClic={() => setItemActive(1)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/imgs/auto2.jpg"
          id={2}
          name="Versa"
          onClic={() => setItemActive(2)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/imgs/auto3.jpg"
          id={3}
          name="Territory"
          onClic={() => setItemActive(3)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/imgs/auto4.jpg"
          id={4}
          name="XV"
          onClic={() => setItemActive(4)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/imgs/auto5.jpg"
          id={5}
          name="EQA"
          onClic={() => setItemActive(5)}
        />
      </ul>
    </div>
  );
}
