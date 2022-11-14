export const OrgazTableHeader = ({ table, setSelectedHeader, flexRender }) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header, idx) => {
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                onClick={() => setSelectedHeader(idx)}
              >
                <div
                  {...{
                    className: header.column.getCanSort()
                      ? "pointer select-none"
                      : "",
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{ asc: " 🔼", desc: " 🔽" }[header.column.getIsSorted()]}
                </div>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};
