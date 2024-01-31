"use client";

import Modal from "@/ui/Modal";
import { useState } from "react";

export default function AdvertisingUser() {
  const [isOpen,setIsOpen] = useState(false)

  return (
    <section className="pt-3">
      <header className="flex items-center py-2">
        <h5 className="text-xl font-semibold ">لیست آگهی ها</h5>
        <button
          className="btn btn-neutral text-white w-[150px]"
          onClick={() => setIsOpen(true)}
        >
          ایجاد آگهی 
        </button>
        <Modal
          onClose={() => setIsOpen(false)}
          open={isOpen}
          title={"ایجاد آگهی"}
        >
          <div>soheil</div>
        </Modal>
      </header>
      <hr className="border-slate-900 mb-3" />
      <AdvertisingTable />
    </section>
  );
}
