"use client";

import { useGetUser } from "@/hooks/useUser";
import { SiRobotframework } from "react-icons/si";
import { HiOutlineLocationMarker, HiOutlineUser } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/ui/Modal";
import AdvertisingForm from "@/components/AdvertisingForm";

const HeaderProducts = () => {
  const { user, isLoading } = useGetUser();
  const [open, setOpen] = useState(false);

  return (
    <header className="py-1.5 lg:px-6 px-2 container mx-auto flex items-center lg:justify-between shadow border-b border-gray-200 dark:bg-slate-900 dark:border-slate-900">
      <div className="flex items-center gap-x-4 w-full">
        <div className="flex items-center gap-x-2 lg:hidden">
          <SiRobotframework size={32} />
          <h4 className="text-2xl font-bold">دیوار</h4>
        </div>
        <input
          type="text"
          placeholder="جست و جو آگهی"
          className="input input-bordered lg:w-[350px] w-full focus:bg-white bg-gray-200 dark:bg-slate-700 text-right transition-all duration-300 outline-none"
        />
      </div>

      <div className="lg:flex hidden items-center gap-x-2">
        {user ? (
          <>
            <Link href={"/profile"} className="flex items-center">
              <HiOutlineUser size={28} />
            </Link>
            <div className="flex items-center gap-x-3">
              <HiOutlineLocationMarker size={28} />
              {user?.city}
            </div>
            <Modal
              onClose={() => setOpen(false)}
              open={open}
              title={"ایجاد آگهی"}
            >
              <AdvertisingForm onClose={() => setOpen(false)} />
            </Modal>
            <button
              onClick={() => setOpen(true)}
              className="btn bg-rose-600 text-white w-[120px] border-none text-lg"
            >
              ثبت آگهی
            </button>
          </>
        ) : (
          <Link
            href={"/auth"}
            className="btn btn-success text-white w-[150px]  border-none"
          >
            ورود / ثبت نام
          </Link>
        )}
      </div>
    </header>
  );
};

export default HeaderProducts;
