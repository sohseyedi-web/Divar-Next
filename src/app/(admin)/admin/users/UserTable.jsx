"use client";

import { useGetAllUser } from "@/hooks/useUser";
import Loading from "@/ui/Loading";
import Table from "@/ui/Tabel";
import { userListTableHeads } from "@/constants/tableHeads";
import UserListRow from "./UserListRow";

const UserTable = () => {
  const { isLoading, users } = useGetAllUser();

  if (isLoading) return <Loading />;

  return (
    <Table>
      <thead>
        <tr>
          {userListTableHeads.map((item) => (
            <th key={item.id}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => (
          <UserListRow key={user._id} user={user} index={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
