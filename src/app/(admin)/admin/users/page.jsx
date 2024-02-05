import UserTable from "./UserTable";

const UserList = () => {
  return (
    <section className="pt-3">
      <header className="flex items-center py-2">
        <h5 className="text-xl font-semibold ">لیست کاربران سایت</h5>
      </header>
      <hr className="border-slate-900 mb-3 dark:border-slate-700" />
      <UserTable/>
    </section>
  )
}

export default UserList;