"use client";
import HeaderDashboard from "@/components/HeaderDashboard";
import { useGetUser } from "@/hooks/useUser";
import Loading from "@/ui/Loading";
export default function Admin() {
  const { user, isLoading } = useGetUser();

  if (isLoading) return <Loading />;
  return (
    <section className="my-3 space-y-3">
      <HeaderDashboard user={user} />
      <h6 className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-800">
        آمار کلی
      </h6>
      <p className="my-2 ">در یک نما خلاصه ای از آمار خود را ببینید</p>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-between flex-wrap my-3  gap-y-3">
          پنل شما
        </div>
      )}
    </section>
  );
}
