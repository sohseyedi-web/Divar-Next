"use client";
import { useResponsive } from "@/context/ResponsiveContext";
import { useTheme } from "@/context/ThemeContext";
import { logout } from "@/services/authServices";
import Back from "@/ui/Back";
import { usePathname, useRouter } from "next/navigation";
import * as RiIcon from "react-icons/ri";
import { SiRobotframework } from "react-icons/si";

const SidebarLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { active } = useResponsive();
  const { dark, setDark } = useTheme();
  const handleThemeSwitch = () => {
    setDark(dark === "dark" ? "light" : "dark");
  };
  const logoutHandler = async () => {
    await logout();
    router.push("/");
  };

  return (
    <>
      <Back />
      <aside
        className={`${
          active ? "w-[240px] right-0 top-0" : "-right-28 w-0 top-0"
        } fixed z-50 lg:relative h-screen bg-gray-100 dark:bg-slate-900  border-l dark:border-slate-900  py-3.5 px-3 rounded space-y-3 transition-all duration-300`}
      >
            <div className="flex items-center gap-x-2 px-2">
              <SiRobotframework size={32} />
              <h4 className="text-2xl font-bold">دیوار</h4>
            </div>
            <hr className="border-slate-900 mb-3 dark:border-slate-700" />
        <div className="pt-3">
          <ul className="flex flex-col gap-y-3">
            {children}
            {pathname === "/products" ? null : (
              <button
                onClick={logoutHandler}
                className="w-full flex items-center gap-x-2 hover:bg-red-500 hover:text-white rounded-md px-2 py-1.5 transition-all duration-300"
              >
                <RiIcon.RiShutDownLine size={26} />
                <h6>خروج از حساب کاربری</h6>
              </button>
            )}
          </ul>
        </div>
        <div
          className="absolute left-2 bottom-2 cursor-pointer dark:text-gray-100 text-gray-900"
          onClick={handleThemeSwitch}
        >
          {dark === "light" ? (
            <RiIcon.RiMoonLine size={26} />
          ) : (
            <RiIcon.RiSunLine size={26} />
          )}
        </div>
      </aside>
    </>
  );
};

export default SidebarLayout;
