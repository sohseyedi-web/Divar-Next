import { toLocalDateString } from "@/utils/ToLocalDate";

const ROLES = {
  ADMIN: "ادمین",
  USER: "کاربر",
};

const HeaderDashboard = ({user}) => {
  return (
    <header className="flex items-center justify-between ">
      <span className="font-medium">وضعیت : {ROLES[user?.role]}</span>
      <p>تاریخ عضویت : {toLocalDateString(user?.createdAt)}</p>
    </header>
  );
};

export default HeaderDashboard;
