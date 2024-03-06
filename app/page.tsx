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
          brand="Nissan"
          name="Skyline"
          desc="The Nissan Skyline is a Japanese sports car known for its power and
          aerodynamic design. It typically features powerful engines, all-wheel
          drive (AWD), and iconic versions like the Skyline GT-R, renowned for
          its track performance."
        />
        <SliderItem
          itemActive={itemActive}
          id={2}
          image="/imgs/auto2.jpg"
          brand="Porsche"
          name="911 carrera"
          desc="The Porsche 911 Carrera is a legendary sports car with a distinctive and elegant design.
          Equipped with powerful engines, it delivers impressive performance. Its interior blends luxury and technology, while its exceptional handling provides an exciting and agile driving experience.
          An icon that seamlessly merges style and performance."
        />
        <SliderItem
          itemActive={itemActive}
          id={3}
          image="/imgs/auto3.jpg"
          brand="Toyota"
          name="Supra mk4"
          desc="The Toyota Supra Mk4 is an iconic sports car celebrated for its distinct and dynamic design.
          Powered by potent engines, it delivers impressive performance.
          The interior seamlessly combines comfort with advanced technology, providing a luxurious driving experience.
          With exceptional handling, the Supra Mk4 offers an exhilarating and agile ride.
          A symbol of automotive excellence that harmonizes style and performance."
        />
        <SliderItem
          itemActive={itemActive}
          id={4}
          image="/imgs/auto4.jpg"
          brand="Honda"
          name="Civic 2.0"
          desc="The Honda Civic 2.0 is a car that blends a 2.0-liter engine with a modern design and fuel efficiency.}
          It stands out for its advanced technology, comfortable interior, and safety features."
        />
        <SliderItem
          itemActive={itemActive}
          id={5}
          image="/imgs/auto5.jpg"
          brand="Ford"
          name="Ranger"
          desc="The Ford Ranger is a midsize pickup truck known for its versatility and robustness.
          It offers various engine options, towing and payload capacity, as well as two or four-wheel drive configurations. 
          With modern technological and safety features, the Ranger is a popular choice for those seeking a rugged and functional truck."
        />
      </ul>
      <Arrows onClickPrev={() => onPrev()} onClickNext={() => onNext()} />
      <ul className="absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto">
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/imgs/auto1.jpg"
          id={1}
          name="Skyline"
          onClic={() => setItemActive(1)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/imgs/auto2.jpg"
          id={2}
          name="911 carrera"
          onClic={() => setItemActive(2)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/imgs/auto3.jpg"
          id={3}
          name="Supra mk4"
          onClic={() => setItemActive(3)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/imgs/auto4.jpg"
          id={4}
          name="Civic 2.0"
          onClic={() => setItemActive(4)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/imgs/auto5.jpg"
          id={5}
          name="Ranger"
          onClic={() => setItemActive(5)}
        />
      </ul>
    </div>
  );
}
