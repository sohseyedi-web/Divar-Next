"use client";
import SidebarLayout from "@/components/SidebarLayout";
import { CustomNavlink } from "@/ui/CustomNavlink";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineTemplate  } from "react-icons/hi";
import { RiLayoutMasonryLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <SidebarLayout>
      <CustomNavlink to={"/"}>
        <HiOutlineHome size={26} />
        <h6>صفحه اصلی</h6>
      </CustomNavlink>
      <CustomNavlink to={"/admin"}>
        <RiLayoutMasonryLine size={26} />
        <h6>داشبورد</h6>
      </CustomNavlink>
      <CustomNavlink to={"/admin/users"}>
        <HiOutlineUsers size={26} />
        <h6>کاربران</h6>
      </CustomNavlink>
      <CustomNavlink to={"/admin/categories"}>
        <HiOutlineTemplate size={26} />
        <h6>دسته بندی</h6>
      </CustomNavlink>
      {/* <CustomNavlink to={"/admin/products"}>
        <RiShoppingBagLine size={26} />
        <h6>محصولات</h6>
      </CustomNavlink>
      
      <CustomNavlink to={"/admin/payments"}>
        <HiOutlineTruck  size={26} />
        <h6>سفارشات</h6>
      </CustomNavlink>
      <CustomNavlink to={"/admin/coupons"}>
        <RiCoupon3Line size={26} />
        <h6>تخفیفات</h6>
      </CustomNavlink> */}
    </SidebarLayout>
  );
};

export default Sidebar;