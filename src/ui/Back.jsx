"use client";

import { useResponsive } from "@/context/ResponsiveContext";

const Back = () => {
  const { setActive, active } = useResponsive();

  return (
    active && (
      <div
        onClick={() => setActive(!active)}
        className="lg:hidden fixed block w-full h-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-10 transition-all duration-300"
      ></div>
    )
  );
};

export default Back;
