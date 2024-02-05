"use client";
import { IoFingerPrint } from "react-icons/io5";

import { useGetUser } from "@/hooks/useUser";
import { useResponsive } from "@/context/ResponsiveContext";

const NavbarPanel = () => {
  const { user } = useGetUser();
  const { active, setActive } = useResponsive();

  return (
    <nav className="w-full flex border-b dark:border-slate-900 bg-gray-100 dark:bg-slate-900 py-4 px-2 items-center justify-between ">
      <h5 className="text-xl font-bold">{user?.name} , خوش اومدی</h5>
      <span onClick={() => setActive(!active)}>
        <IoFingerPrint size={26} className="cursor-pointer lg:hidden block" />
      </span>
    </nav>
  );
};

export default NavbarPanel;
