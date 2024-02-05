"use client";
import Modal from "@/ui/Modal";
import { toPersianNumbers } from "@/utils/toPersianNumber";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";

const PhoneModal = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);

  const handleCopyNumber = () => {
    setCopy(true);
    toast.success("کپی شد");
  };

  return (
    <>
      <Modal onClose={() => setOpen(false)} open={open} title={"شماره تماس"}>
        <div className="py-2 space-y-4">
          <div className="flex items-center justify-between">
            <span>شماره موبایل</span>
            <div className="flex items-center gap-x-2">
              <span>{toPersianNumbers("09331559119")}</span>
              
              <CopyToClipboard text={"09331559119"} onCopy={handleCopyNumber}>
                <span
                  className={
                    !copy ? "opacity-65 cursor-pointer" : " cursor-pointer"
                  }
                >
                  <MdContentCopy size={24} />
                </span>
              </CopyToClipboard>
            </div>
          </div>
          <div className="bg-slate-300 dark:bg-slate-900 py-1 px-2 text-right rounded">
            <h6 className="font-bold block mb-2">هشدار پلیس</h6>
            <p>
              لطفا پیش از انجام معامله و هر نوع پرداخت وجه از صحت کالا یا خدمات
              ارائه شده به صورت حضوری اطمینان حاصل فرمایید
            </p>
          </div>
          <button
            className="w-full btn bg-red-700 text-white text-lg"
            onClick={() => setOpen(false)}
          >
            بستن
          </button>
        </div>
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn-sm btn btn-neutral text-white text-lg w-[15%]"
      >
        اطلاعات تماس
      </button>
    </>
  );
};

export default PhoneModal;
