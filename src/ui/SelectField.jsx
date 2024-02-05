import React from "react";

const SelectField = ({
  label,
  options,
  required,
  validationSchema,
  name,
  register,
  errors,
}) => {
  return (
    <div className="space-y-3">
      <label className="block mb-2 text-lg text-right">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name, validationSchema)}
        className="select select-bordered w-full focus:bg-white bg-gray-200 dark:bg-slate-900 text-center transition-all duration-300 outline-none"
      >
        {options?.map((option) => (
          <option
            className=" bg-white dark:bg-gray-800"
            value={option.value || option._id}
            key={option.value || option._id}
          >
            {option.label || option.title}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-red-500 my-1">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default SelectField;
