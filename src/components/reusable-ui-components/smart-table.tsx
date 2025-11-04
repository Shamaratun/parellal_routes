// "use client";

// import React, { useState } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getSortedRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   flexRender,
//   ColumnDef,
//   SortingState,
//   PaginationState,
//   RowSelectionState,
// } from "@tanstack/react-table";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// interface DataTableProps<T extends object> {
//   data: T[];
//   columns: ColumnDef<T, any>[];
//   title?: string;
// }

// export function SmartTable<T extends object>({ data, columns, title }: DataTableProps<T>) {
//   const [sorting, setSorting] = useState<SortingState>([]);
//   const [globalFilter, setGlobalFilter] = useState<string>("");
//   const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 5 });
//   const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

//   const table = useReactTable({
//     data,
//     columns,
//     state: { sorting, globalFilter, pagination, rowSelection },
//     onSortingChange: setSorting,
//     onGlobalFilterChange: setGlobalFilter,
//     onPaginationChange: setPagination,
//     onRowSelectionChange: setRowSelection,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   });

//   return (
//     <div className="space-y-6">
//       {title && <h2 className="text-lg font-semibold text-gray-700">{title}</h2>}

//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
//         <div className="flex items-center gap-2">
//           <input
//             value={globalFilter ?? ""}
//             onChange={(e) => setGlobalFilter(e.target.value)}
//             placeholder="Search..."
//             className="border border-blue-200 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
//           />
//           <span className="text-sm text-gray-500">({data.length} records)</span>
//         </div>

//         <div className="flex items-center gap-2">
//           <label className="text-sm">Rows per page:</label>
//           <select
//             value={pagination.pageSize}
//             onChange={(e) =>
//               setPagination((p) => ({ ...p, pageSize: Number(e.target.value), pageIndex: 0 }))
//             }
//             className="border border-blue-200 rounded-lg px-2 py-1 bg-white shadow-sm focus:ring-2 focus:ring-blue-300"
//           >
//             {[2, 5, 10, 20, 50].map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="overflow-x-auto rounded-2xl border border-blue-100 shadow-xl bg-gradient-to-br from-white to-blue-50">
//         <Table className="min-w-[900px] text-md">
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id} className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800">
//                 {headerGroup.headers.map((header) => (
//                   <TableHead
//                     key={header.id}
//                     className="text-center px-3 py-3 font-semibold"
//                     onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
//                     style={{ cursor: header.column.getCanSort() ? "pointer" : "default" }}
//                   >
//                     <div className="flex items-center justify-center gap-2">
//                       {flexRender(header.column.columnDef.header, header.getContext())}
//                       {header.column.getIsSorted() === "asc" ? "🔼" : header.column.getIsSorted() === "desc" ? "🔽" : null}
//                     </div>
//                   </TableHead>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHeader>

//           <TableBody>
//             {table.getRowModel().rows.map((row) => (
//               <TableRow key={row.id} className="hover:bg-blue-100/70 transition text-center">
//                 {row.getVisibleCells().map((cell) => (
//                   <TableCell key={cell.id} className="px-3 py-2 text-gray-700 align-top break-words">
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3 rounded-xl border border-blue-100 shadow">
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => table.setPageIndex(0)}
//             disabled={!table.getCanPreviousPage()}
//             className="px-3 py-1 border rounded-md shadow-sm bg-blue-50 hover:bg-blue-100 disabled:opacity-50"
//           >
//             {"<<"}
//           </button>
//           <button
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//             className="px-3 py-1 border rounded-md shadow-sm bg-blue-50 hover:bg-blue-100 disabled:opacity-50"
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//             className="px-3 py-1 border rounded-md shadow-sm bg-blue-50 hover:bg-blue-100 disabled:opacity-50"
//           >
//             Next
//           </button>
//           <button
//             onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//             disabled={!table.getCanNextPage()}
//             className="px-3 py-1 border rounded-md shadow-sm bg-blue-50 hover:bg-blue-100 disabled:opacity-50"
//           >
//             {">>"}
//           </button>
//         </div>

//         <div className="text-sm text-gray-600">
//           Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
//           <strong>{table.getPageCount()}</strong> — Showing {table.getRowModel().rows.length} rows
//         </div>
//       </div>
//     </div>
//   );
// }
