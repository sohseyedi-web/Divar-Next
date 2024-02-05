"use client";
import AdvertisingForm from "@/components/AdvertisingForm";
import { useResponsive } from "@/context/ResponsiveContext";
import { useGetUser } from "@/hooks/useUser";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { useState } from "react";
import * as HiIcon from "react-icons/hi";

const HeaderResponsive = () => {
  const { user, isLoading } = useGetUser();
  const { active, setActive } = useResponsive();
  const [open, setOpen] = useState(false);

  return (
    <footer className="lg:hidden w-full fixed bottom-0 flex items-center bg-slate-200 justify-between px-4 py-2 border-t shadow-sm">
      <div className="flex flex-col items-center">
        <HiIcon.HiOutlineLocationMarker size={26}/>
        <span className="text-[1.05rem]">{user?.city}</span>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <HiIcon.HiAdjustments size={26}/>
        <span className="text-[1.05rem]">دسته ها</span>
      </div>
      <Modal onClose={() => setOpen(false)} open={open} title={"ایجاد آگهی"}>
        <AdvertisingForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col items-center cursor-pointer"
      >
        <HiIcon.HiPlusCircle size={26}/>
        <span className="text-[1.05rem]">ثبت آگهی</span>
      </button>
      <Link href={"/profile"} className="flex flex-col items-center">
        <HiIcon.HiUser size={26}/>
        <span className="text-[1.05rem]">دیوار من</span>
      </Link>
    </footer>
  );
};

export default HeaderResponsive;
