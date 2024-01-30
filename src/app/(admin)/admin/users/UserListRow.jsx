import { toLocalDateStringShort } from "@/utils/ToLocalDate";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumber";
import * as RiIcon from "react-icons/ri";
import * as HiIcon from "react-icons/hi2";

const UserListRow = ({ user, index }) => {
  return (
    <tr key={user?._id}>
      <td>{toPersianNumbersWithComma(index + 1)}</td>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>{!user?.Products.length ? "-" : null}</td>
      <td>{toPersianNumbers(user?.phoneNumber)}</td>
      <td>{toLocalDateStringShort(user?.createdAt)}</td>
      <td className="flex items-center gap-x-2">
        <span className="p-1 rounded text-white bg-indigo-600">
          <HiIcon.HiEye size={20} />
        </span>
        <span
          className={user?.status == 1 ? " text-red-600" : " text-green-600"}
        >
          {user?.status == 1 ? (
            <RiIcon.RiUserUnfollowLine size={20} />
          ) : (
            <RiIcon.RiUserFollowLine size={20} />
          )}
        </span>
      </td>
    </tr>
  );
};

export default UserListRow;
