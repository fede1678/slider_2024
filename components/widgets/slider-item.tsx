import Image from "next/image";

import { cn } from "@/lib/utils";

interface SliderItemProps {
  itemActive: number;
  id: number;
  image: string;
  brand: string;
  name: string;
  desc: string;
}

export const SliderItem = ({
  itemActive,
  id,
  image,
  brand,
  name,
  desc,
}: SliderItemProps) => {
  return (
    <li
      className={cn(
        " absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-slider transition-all duration-500",
        itemActive === id ? "opacity-100 z-10" : "opacity-0"
      )}
    >
      <div className=" relative w-full h-full">
        <Image src={image} alt="Image" fill className="object-cover" />
      </div>
      <div className=" space-y-4 absolute left-[10%] top-[20%] w-[500px] max-w-[80%] z-10">
        <p
          className={cn(
            "uppercase tracking-[10px] text-white translate-y-[30px] blur-[20px] opacity-0",
            itemActive === id && "animate-show-content animation-delay-3"
          )}
        >
          {brand}{" "}
        </p>
        <h2
          className={cn(
            "text-6xl lg:text-8xl m-0 text-white font-bold translate-y-[30px] blur-[20px] opacity-0,",
            itemActive === id && "animate-show-content animation-delay-4"
          )}
        >
          {name}
        </h2>
        <p
          className={cn(
            "text-gray-200 translate-y-[30px] blur-[20px] opacity-0",
            itemActive === id && "animate-show-content animation-delay-7"
          )}
        >
          {desc}
        </p>
      </div>
    </li>
  );
};
