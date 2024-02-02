function CheckBox({ id, name, value, onChange, checked, label }) {
  return (
    <div className="flex items-center gap-x-2 my-3">
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
        className="checkbox checkbox-primary"
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
}
export default CheckBox;
