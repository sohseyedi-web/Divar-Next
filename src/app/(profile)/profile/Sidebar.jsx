"use client";
import SidebarLayout from "@/components/SidebarLayout";
import { CustomNavlink } from "@/ui/CustomNavlink";
import * as HiIcon from "react-icons/hi2";
import { RiLayoutMasonryLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <SidebarLayout>
      <CustomNavlink to={"/"}>
        <HiIcon.HiOutlineHome size={26} />
        <h6>صفحه اصلی</h6>
      </CustomNavlink>
      <CustomNavlink to={"/profile"}>
        <RiLayoutMasonryLine size={26} />
        <h6>داشبورد</h6>
      </CustomNavlink>
      <CustomNavlink to={"/profile/me"}>
        <HiIcon.HiOutlineUser size={26} />
        <h6>اطلاعات کاربری</h6>
      </CustomNavlink>
      <CustomNavlink to={"/profile/saved"}>
        <HiIcon.HiOutlineBookmark size={26} />
        <h6>نشان شده ها</h6>
      </CustomNavlink>
    </SidebarLayout>
  );
};

export default Sidebar;
