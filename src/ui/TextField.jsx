import React from "react";

const TextField = ({
  name,
  label,
  placeHolder,
  register,
  required,
  errors,
  validationSchema,
  type = "text",
}) => {
  return (
    <>
      <label htmlFor={name} className="mb-3 block text-lg text-right">
        {label}
        {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        type={type}
        className="input input-bordered w-full focus:bg-white bg-gray-200 dark:bg-slate-900 text-center transition-all duration-300 outline-none"
        placeholder={placeHolder}
        name={name}
        id={name}
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-red-500 my-1">{errors[name]?.message}</span>
      )}
    </>
  );
};

export default TextField;
