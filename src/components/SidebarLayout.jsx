"use client";
import { useResponsive } from "@/context/ResponsiveContext";
import { logout } from "@/services/authServices";
import Back from "@/ui/Back";
import { usePathname, useRouter } from "next/navigation";
import { RiShutDownLine } from "react-icons/ri";
import { SiRobotframework } from "react-icons/si";

const SidebarLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { active } = useResponsive();
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
        } fixed z-50 lg:relative h-screen bg-gray-100 border-l text-gray-800  py-3.5 px-3 rounded space-y-3 transition-all duration-300`}
      >
        {pathname === "/products" ? null : (
          <div className="flex items-center gap-x-2 px-2">
            <SiRobotframework size={32} />
            <h4 className="text-2xl font-bold">دیوار</h4>
          </div>
        )}
        <hr />
        <div className="mt-3">
          <ul className="flex flex-col gap-y-3">
            {children}
            {pathname === "/products" ? null : (
              <button
                onClick={logoutHandler}
                className="w-full flex items-center gap-x-2 hover:bg-red-500 hover:text-white rounded-md px-2 py-1.5 transition-all duration-300"
              >
                <RiShutDownLine size={26} />
                <h6>خروج از حساب کاربری</h6>
              </button>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarLayout;
