import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import * as RiIcon from "react-icons/ri";

const Modal = ({ open, onClose, children, title }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 text-right" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full bg-slate-100 max-w-lg transform overflow-hidden rounded-xl p-6 align-middle shadow-md transition-all">
                <Dialog.Title className="text-xl font-medium text-gray-800 w-full flex items-center justify-between py-2">
                  <h3>{title}</h3>

                  <span className="cursor-pointer" onClick={onClose}>
                    <RiIcon.RiCloseLine size={28} />
                  </span>
                </Dialog.Title>
                <hr className="border-slate-900" />
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
