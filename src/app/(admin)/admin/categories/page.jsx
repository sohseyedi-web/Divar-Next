"use client"
import { useState } from 'react';
import Modal from '@/ui/Modal';
import CategoryForm from '@/components/CategoryForm';
import CategoryList from './CategoryList'

export default function Categories() {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <section className="pt-3">
      <header className="flex items-center justify-between py-2">
        <h5 className="text-xl font-semibold ">دسته بندی ها</h5>
        <button className="btn btn-neutral text-white w-[150px]" onClick={() => setIsOpen(true)}>
          ایجاد دسته بندی
        </button>
        <Modal onClose={() => setIsOpen(false)} open={isOpen} title={"ایجاد دسته بندی"}>
          <CategoryForm onClose={() => setIsOpen(false)}/>
        </Modal>
      </header>
      <hr className="border-slate-900 mb-3" />
      <CategoryList />
    </section>
  );
}
