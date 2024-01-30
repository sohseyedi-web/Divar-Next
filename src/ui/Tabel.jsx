const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto rounded-md shadow-md text-gray-800 bg-slate-200">
      <table className="table">{children}</table>
    </div>
  );
};

export default Table;
