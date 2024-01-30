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
      <label className="block mb-1 text-lg text-right">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name, validationSchema)}
        className="select select-bordered w-full focus:bg-white bg-gray-200 text-center transition-all duration-300 outline-none"
      >
        {options.map((option) => (
          <option
            className=" bg-white"
            value={option.value}
            key={option.value}
          >
            {option.label}
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