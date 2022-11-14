import { useState } from "react";

import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { OrgazTableHeader } from "./OrgazTableHeader";
import { OrgazTableBody } from "./OrgazTableBody";

export const OrgazTable = ({
  orgazes,
  selectedRow,
  onSelectedRow,
  onActionClick,
  showActions,
  expandRow,
  accounts,
  onDeleteRow,
  onEditRow,
  onSetOrgazes,
}) => {
  const [sorting, setSorting] = useState([]);
  const [selectedHeader, setSelectedHeader] = useState(null);

  const columns = [
    {
      header: "Organization",
      footer: (props) => props.column.id,
      columns: [
        {
          header: "Name",
          columns: [
            {
              accessorKey: "firstName",
              header: () => "First Name",
              cell: (info) => info.getValue(),
              footer: (props) => props.column.id,
            },
            {
              accessorKey: "lastName",
              header: "Last Name",
              cell: (info) => info.getValue(),
              footer: (props) => props.column.id,
            },
          ],
        },
        {
          header: "Info",
          columns: [
            {
              accessorKey: "email",
              header: "Email",
              cell: (info) => info.getValue(),
              footer: (props) => props.column.id,
            },
            {
              accessorKey: "status",
              header: "Status",
              cell: (info) => info.getValue(),
              footer: (props) => props.column.id,
            },
            {
              accessorKey: "lastLoginDate",
              header: "Last Login Date",
              cell: (info) => info.getValue(),
              footer: (props) => props.column.id,
            },
            {
              accessorKey: "actions",
              header: "",
              cell: (info) => "...",
            },
          ],
        },
      ],
    },
  ];

  const table = useReactTable({
    data: orgazes,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table>
      <OrgazTableHeader
        table={table}
        setSelectedHeader={setSelectedHeader}
        flexRender={flexRender}
      />

      <OrgazTableBody
        table={table}
        selectedRow={selectedRow}
        onSelectedRow={onSelectedRow}
        selectedHeader={selectedHeader}
        onActionClick={onActionClick}
        flexRender={flexRender}
        showActions={showActions}
        expandRow={expandRow}
        accounts={accounts}
        onDeleteRow={onDeleteRow}
        onEditRow={onEditRow}
        orgazes={orgazes}
        onSetOrgazes={onSetOrgazes}
      />
    </table>
  );
};
