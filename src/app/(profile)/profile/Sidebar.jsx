"use client";
import SidebarLayout from "@/components/SidebarLayout";
import { CustomNavlink } from "@/ui/CustomNavlink";
import { HiOutlineHome, HiOutlineUser,HiOutlineBookmark  } from "react-icons/hi2";
import { RiLayoutMasonryLine } from "react-icons/ri";


const Sidebar = () => {
  return (
    <SidebarLayout>
      <CustomNavlink to={"/"}>
        <HiOutlineHome size={26} />
        <h6>صفحه اصلی</h6>
      </CustomNavlink>
      <CustomNavlink to={"/profile"}>
        <RiLayoutMasonryLine size={26} />
        <h6>داشبورد</h6>
      </CustomNavlink>
      <CustomNavlink to={"/profile/me"}>
        <HiOutlineUser size={26} />
        <h6>اطلاعات کاربری</h6>
      </CustomNavlink>
      <CustomNavlink to={"/profile/saved"}>
        <HiOutlineBookmark size={26} />
        <h6>نشان شده ها</h6>
      </CustomNavlink>
      {/* <CustomNavlink to={"/profile/advertising"}>
        <RiShoppingBagLine size={26} />
        <h6>اگهی های من</h6>
      </CustomNavlink> */}
    </SidebarLayout>
  );
};

export default Sidebar;
