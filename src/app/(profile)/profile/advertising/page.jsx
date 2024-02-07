"use client";
import AdvertisingForm from "@/components/AdvertisingForm";
import Modal from "@/ui/Modal";
import { useState } from "react";
import AdvertisingTable from "./AdvertisingTabel";

export default function AdvertisingMe() {

  const [open, setOpen] = useState(false);


  return (
    <section className="pt-3">
      <header className="flex items-center justify-between py-2">
        <h5 className="text-xl font-semibold ">آگهی های من</h5>
        <Modal onClose={() => setOpen(false)} open={open} title={"ایجاد آگهی"}>
          <AdvertisingForm onClose={() => setOpen(false)} />
        </Modal>
        <button
          onClick={() => setOpen(true)}
          className="btn bg-rose-600 text-white w-[120px] border-none text-lg"
        >
          ثبت آگهی
        </button>
      </header>
      <hr className="border-slate-900 mb-3 dark:border-slate-700" />
      <AdvertisingTable />
    </section>
  );
}
