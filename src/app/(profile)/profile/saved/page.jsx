import SavedTable from "./SavedTable";

export default function SavedAdvertisings() {
  return (
    <section className="pt-3">
      <header className="flex items-center py-2">
        <h5 className="text-xl font-semibold ">آگهی های نشان شده</h5>
      </header>
      <hr className="border-slate-900 mb-3" />
      <SavedTable />
    </section>
  );
}
