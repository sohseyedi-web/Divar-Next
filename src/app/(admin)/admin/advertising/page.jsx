import AdvertisingTable from "./AdvertisingTable";

export default function Advertising() {
  return (
    <section className="pt-3">
      <header className="flex items-center py-2">
        <h5 className="text-xl font-semibold ">لیست آگهی ها </h5>
      </header>
      <hr className="border-slate-900 mb-3" />
      <AdvertisingTable />
    </section>
  );
}