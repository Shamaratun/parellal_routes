// &&&&& simple one tables (responsive)&&&&&&&&&&&&&&&
// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { SurgicalRecord } from "../type";

// interface Props {
//   surgical_data: SurgicalRecord[];
// }

// export default function SurgicalComponent({ surgical_data }: Props) {
//   if (!surgical_data || surgical_data.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md text-center text-gray-500 italic">
//         No surgical records available.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/60 rounded-2xl p-4 shadow-md overflow-x-auto">
//       <Table className="min-w-[900px] md:min-w-[1000px] lg:min-w-[1200px] text-sm">
//         <TableHeader>
//           <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
//             <TableHead>Surgery Name</TableHead>
//             <TableHead>Operation Date</TableHead>
//             <TableHead>Procedure Notes</TableHead>
//             <TableHead>Complications</TableHead>
//             <TableHead>Challenges</TableHead>
//             <TableHead>Anesthesia</TableHead>
//             <TableHead>Post-Op Recovery</TableHead>
//             <TableHead>Recovery Notes</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {surgical_data.map((record) => (
//             <TableRow key={record.surgical.id} className="bg-blue-50 hover:bg-blue-100 text-center transition-all">
//               <TableCell>{record.surgery_name}</TableCell>
//               <TableCell>{record.surgical.operation_date}</TableCell>
//               <TableCell>{record.surgical.procedure_notes}</TableCell>
//               <TableCell>{record.surgical.challenges_during_surgery}</TableCell>
//               <TableCell>{record.surgical.nature_of_anesthesia}</TableCell>
//               <TableCell>{record.surgical.complications}</TableCell>
//               <TableCell>{record.surgical.post_operative_recovery}</TableCell>
//               <TableCell>{record.surgical.post_operative_recovery_notes}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
// &&&&& two tables side by side (responsive)&&&&&&&&&&&&&&&
// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { SurgicalRecord } from "../type";

// interface Props {
//   surgical_data: SurgicalRecord[];
// }

// export default function SurgicalComponent({ surgical_data }: Props) {
//   if (!surgical_data || surgical_data.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md text-center text-gray-500 italic">
//         No surgical records available.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/60 rounded-2xl p-4 shadow-md">
//       {/* ✅ Two tables side by side (responsive) */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* ===== Left Table ===== */}
//         <div className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-hidden">
//           <Table className="w-full text-sm">
//             <TableHeader>
//               <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
//                 <TableHead>Surgery Name</TableHead>
//                 <TableHead>Operation Date</TableHead>
//                 <TableHead>Procedure Notes</TableHead>
//                 <TableHead>Anesthesia</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {surgical_data.map((record) => (
//                 <TableRow
//                   key={record.surgical.id}
//                   className="bg-blue-50 hover:bg-blue-100 text-center transition-all"
//                 >
//                   <TableCell>{record.surgery_name}</TableCell>
//                   <TableCell>{record.surgical.operation_date}</TableCell>
//                   <TableCell>{record.surgical.procedure_notes}</TableCell>
//                   <TableCell>{record.surgical.nature_of_anesthesia}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>

//         {/* ===== Right Table ===== */}
//         <div className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-hidden">
//           <Table className="w-full text-sm">
//             <TableHeader>
//               <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
//                 <TableHead>Complications</TableHead>
//                 <TableHead>Challenges</TableHead>
//                 <TableHead>Post-Op Recovery</TableHead>
//                 <TableHead>Recovery Notes</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {surgical_data.map((record) => (
//                 <TableRow
//                   key={record.surgical.id}
//                   className="bg-blue-50 hover:bg-blue-100 text-center transition-all"
//                 >
//                   <TableCell>{record.surgical.complications}</TableCell>
//                   <TableCell>{record.surgical.challenges_during_surgery}</TableCell>
//                   <TableCell>{record.surgical.post_operative_recovery}</TableCell>
//                   <TableCell>{record.surgical.post_operative_recovery_notes}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { SurgicalRecord } from "../type";

// interface Props {
//   surgical_data: SurgicalRecord[];
// }
// function getFieldValue(record: SurgicalRecord, field: { key: string; nested?: string }) {
//   if (field.nested && (record as any)[field.nested]) {
//     return (record as any)[field.nested][field.key] || "N/A";
//   }
//   return (record as any)[field.key] || "N/A";
// }
// export default function SurgicalComponent({ surgical_data }: Props) {
//   if (!surgical_data || surgical_data.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md text-center text-gray-500 italic">
//         No surgical records available.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/60 rounded-2xl p-4 shadow-md">
//       <div className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-hidden">
//         <Table className="w-full text-sm">
//           <TableHeader>
//             <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
//               <TableHead className="w-1/4 text-left pl-4">Details</TableHead>
//               {surgical_data.map((record) => (
//                 <TableHead key={record.surgical.id} className="text-center">
//                   {record.surgery_name || "Unnamed Surgery"}
//                 </TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {/* Operation Date Row */}
//             <TableRow>
//               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
//                 Operation Date
//               </TableCell>
//               {surgical_data.map((record) => (
//                 <TableCell
//                   key={record.surgical.id}
//                   className="text-center text-gray-700"
//                 >
//                   {record.surgical.operation_date || "N/A"}
//                 </TableCell>
//               ))}
//             </TableRow>

//             {/* Procedure Notes Row */}
//             <TableRow>
//               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
//                 Procedure Notes
//               </TableCell>
//               {surgical_data.map((record) => (
//                 <TableCell
//                   key={record.surgical.id}
//                   className="text-center text-gray-700"
//                 >
//                   {record.surgical.procedure_notes || "N/A"}
//                 </TableCell>
//               ))}
//             </TableRow>

//             {/* Anesthesia Row */}
//             <TableRow>
//               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
//                 Anesthesia
//               </TableCell>
//               {surgical_data.map((record) => (
//                 <TableCell
//                   key={record.surgical.id}
//                   className="text-center text-gray-700"
//                 >
//                   {record.surgical.nature_of_anesthesia || "N/A"}
//                 </TableCell>
//               ))}
//             </TableRow>

//             {/* Surgery Name Row */}
//             <TableRow>
//               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
//                 Surgery Name
//               </TableCell>
//               {surgical_data.map((record) => (
//                 <TableCell
//                   key={record.surgical.id}
//                   className="text-center text-gray-700"
//                 >
//                   {record.surgery_name || "N/A"}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-hidden">
//         <Table className="w-full text-md border-amber-100 border-separate">
//           <TableHeader>
//             <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
//               <TableHead className="w-1/4 text-left pl-4">Details</TableHead>
//               {surgical_data.map((record) => (
//                 <TableHead key={record.surgical.id} className="text-center">
//                   {record.surgery_name || "Unnamed Surgery"}
//                 </TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {/* Complications Row */}
//             <TableRow>
//               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
//                 Complications
//               </TableCell>
//               {surgical_data.map((record) => (
//                 <TableCell
//                   key={record.surgical.id}
//                   className="text-center text-gray-700"
//                 >
//                   {record.surgical.complications || "N/A"}
//                 </TableCell>
//               ))}
//             </TableRow>

//             {/* Challenges Row */}
//             <TableRow>
//               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
//                 Challenges
//               </TableCell>
//               {surgical_data.map((record) => (
//                 <TableCell
//                   key={record.surgical.id}
//                   className="text-center text-gray-700"
//                 >
//                   {record.surgical.challenges_during_surgery || "N/A"}
//                 </TableCell>
//               ))}
//             </TableRow>

//             {/* Post-Op Recovery Row */}
//             <TableRow>
//               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
//                 Post-Op Recovery
//               </TableCell>
//               {surgical_data.map((record) => (
//                 <TableCell
//                   key={record.surgical.id}
//                   className="text-center text-gray-700"
//                 >
//                   {record.surgical.post_operative_recovery || "N/A"}
//                 </TableCell>
//               ))}
//             </TableRow>

//             {/* Recovery Notes Row */}
//             <TableRow>
//               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
//                 Recovery Notes
//               </TableCell>
//               {surgical_data.map((record) => (
//                 <TableCell
//                   key={record.surgical.id}
//                   className="text-center text-gray-700"
//                 >
//                   {record.surgical.post_operative_recovery_notes || "N/A"}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//    );
// }
//    "use client"; final code without tanstack

// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { SurgicalRecord } from "../type";

// interface Props {
//   surgical_data: SurgicalRecord[];
// }




// type NestedRecord = Record<string, unknown>;

// const getFieldValue = (
//   record: SurgicalRecord,
//   field: { key: string; nested?: string }
// ): string => {
//   if (field.nested) {
//     const nestedObj = record[field.nested as keyof SurgicalRecord] as NestedRecord | undefined;
//     return (nestedObj?.[field.key] as string | undefined) ?? "---";
//   }

//   return (record[field.key as keyof SurgicalRecord] as string | undefined) ?? "---";
// };

// export default function SurgicalComponent({ surgical_data }: Props) {
//   if (!surgical_data || surgical_data.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md text-center text-gray-500 italic">
//         No surgical records available.
//       </div>
//     );
//   }

//   const tables = [
//     {
//       title: "Surgery Details",
//       fields: [

//         { label: "Operation Date", key: "operation_date", nested: "surgical" },
//         { label: "Procedure Notes", key: "procedure_notes", nested: "surgical" },
//         { label: "Anesthesia", key: "nature_of_anesthesia", nested: "surgical" },
//         { label: "Remarks", key: "remarks", nested: "surgical" },
//       ],
//     },
//     {
//       title: "Post-Op Summary",
//       fields: [
//         { label: "Complications", key: "complications", nested: "surgical" },
//         { label: "Challenges", key: "challenges_during_surgery", nested: "surgical" },
//         { label: "Post-Op Recovery", key: "post_operative_recovery", nested: "surgical" },
//         { label: "Recovery Notes", key: "post_operative_recovery_notes", nested: "surgical" },
//       ],
//     },
//   ];

//   return (
//      <div className="overflow-x-auto">
//     <div className="flex flex-col lg:flex-row gap-4 ">
//       {tables.map((table, idx) => (
//         <div
//           key={idx}
//           className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-x-auto"
//         >
//           <Table className="w-full min-w-[320px]  table-auto ">
//             <TableHeader>
//               <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
//                 <TableHead className="w-32 text-left pl-3 break-words">Surgery Name</TableHead>
//                 {surgical_data.map((record) => (
//                   <TableHead
//                     key={record.surgical.id}
//                     className="w-48 text-center px-2 break-words whitespace-normal"
//                   >
//                     {record.surgery_name || "---"}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {table.fields.map((field) => (
//                 <TableRow key={field.label} className="align-top hover:bg-blue-100 transition">
//                   <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-3 w-32 break-words">
//                     {field.label}
//                   </TableCell>
//                   {surgical_data.map((record) => (
//                     <TableCell
//                       key={record.surgical.id + field.key}
//                       className="text-center text-gray-700 px-2 break-words whitespace-normal w-48 align-top"
//                     >
//                       {getFieldValue(record, field)}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// }

// tanstack long code with all logic together
// "use client"; 

// import React, { useMemo, useState } from "react";
// import {
//   useReactTable,
//   createColumnHelper,
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

// import { SurgicalRecord } from "../type";

// interface Props {
//   surgical_data: SurgicalRecord[];
// }

// export default function SurgicalComponent({ surgical_data }: Props) {
//   if (!surgical_data || surgical_data.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md text-center text-gray-500 italic">
//         No surgical records available.
//       </div>
//     );
//   }

//   // ✅ 1. Memoized data
//   const data = useMemo(() => surgical_data, [surgical_data]);

//   // ✅ 2. Define columns
//   const columnHelper = createColumnHelper<SurgicalRecord>();

//   const columns = useMemo<ColumnDef<SurgicalRecord, any>[]>(
//     () => [
//       {
//         id: "select",
//         header: ({ table }) => (
//           <input
//             type="checkbox"
//             aria-label="Select all"
//             checked={table.getIsAllPageRowsSelected()}
//             onChange={table.getToggleAllPageRowsSelectedHandler()}
//           />
//         ),
//         cell: ({ row }) => (
//           <input
//             type="checkbox"
//             aria-label={`Select row ${row.id}`}
//             checked={row.getIsSelected()}
//             onChange={row.getToggleSelectedHandler()}
//           />
//         ),
//         size: 40,
//       },

//       columnHelper.accessor("surgery_name", {
//         header: "Surgery Name",
//         cell: (info) => info.getValue() || "---",
//         enableSorting: true,
//       }),
//       columnHelper.accessor("surgical.operation_date", {
//         header: "Operation Date",
//         cell: (info) => info.getValue() || "---",
//         enableSorting: true,
//       }),
//       columnHelper.accessor("surgical.procedure_notes", {
//         header: "Procedure Notes",
//         cell: (info) => info.getValue() || "---",
//       }),
//       columnHelper.accessor("surgical.nature_of_anesthesia", {
//         header: "Anesthesia",
//         cell: (info) => info.getValue() || "---",
//       }),
//       columnHelper.accessor("surgical.remarks", {
//         header: "Remarks",
//         cell: (info) => info.getValue() || "---",
//       }),
//       columnHelper.accessor("surgical.complications", {
//         header: "Complications",
//         cell: (info) => info.getValue() || "---",
//       }),
//       columnHelper.accessor("surgical.challenges_during_surgery", {
//         header: "Challenges",
//         cell: (info) => info.getValue() || "---",
//       }),
//       columnHelper.accessor("surgical.post_operative_recovery", {
//         header: "Post-Op Recovery",
//         cell: (info) => info.getValue() || "---",
//       }),
//       columnHelper.accessor("surgical.post_operative_recovery_notes", {
//         header: "Recovery Notes",
//         cell: (info) => info.getValue() || "---",
//       }),
//       {
//         id: "actions",
//         header: "Actions",
//         cell: ({ row }) => (
//           <div className="flex gap-2 justify-center items-center">
//             <button
//               type="button"
//               className="text-blue-600 underline text-sm"
//               onClick={() => {
//                 const original = row.original;
//                 console.log("View clicked:", original);
//               }}
//             >
//               View
//             </button>
//           </div>
//         ),
//       },
//     ],
//     [columnHelper]
//   );

//   // ✅ 3. Table state
//   const [sorting, setSorting] = useState<SortingState>([]);
//   const [globalFilter, setGlobalFilter] = useState<string>("");
//   const [pagination, setPagination] = useState<PaginationState>({
//     pageIndex: 0,
//     pageSize: 5,
//   });
//   const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

//   // ✅ 4. Create table instance
//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       sorting,
//       globalFilter,
//       pagination,
//       rowSelection,
//     },
//     onSortingChange: setSorting,
//     onGlobalFilterChange: setGlobalFilter,
//     onPaginationChange: setPagination,
//     onRowSelectionChange: setRowSelection,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   });

//   // ✅ 5. Render UI (with new design)
//   return (
//     <div className="space-y-6">
//       {/* Search + Page size */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
//         <div className="flex items-center gap-2">
//           <input
//             value={globalFilter ?? ""}
//             onChange={(e) => setGlobalFilter(e.target.value)}
//             placeholder="Search..."
//             className="border border-blue-200 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
//           />
//           <span className="text-sm text-gray-500">
//             ({data.length} records)
//           </span>
//         </div>

//         <div className="flex items-center gap-2">
//           <label className="text-sm">Rows per page:</label>
//           <select
//             value={pagination.pageSize}
//             onChange={(e) =>
//               setPagination((p) => ({
//                 ...p,
//                 pageSize: Number(e.target.value),
//                 pageIndex: 0,
//               }))
//             }
//             className="border border-blue-200 rounded-lg px-2 py-1 bg-white shadow-sm focus:ring-2 focus:ring-blue-300"
//           >
//             {[5, 10, 20, 50].map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto rounded-2xl border border-blue-100 shadow-xl bg-gradient-to-br from-white to-blue-50">
//         <Table className="min-w-[900px] text-md">
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow
//                 key={headerGroup.id}
//                 className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800"
//               >
//                 {headerGroup.headers.map((header) => (
//                   <TableHead
//                     key={header.id}
//                     className="text-center px-3 py-3 font-semibold"
//                     onClick={
//                       header.column.getCanSort()
//                         ? header.column.getToggleSortingHandler()
//                         : undefined
//                     }
//                     style={{
//                       cursor: header.column.getCanSort()
//                         ? "pointer"
//                         : "default",
//                     }}
//                   >
//                     <div className="flex items-center justify-center gap-2">
//                       <span>
//                         {flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                       </span>
//                       {header.column.getIsSorted() === "asc"
//                         ? "🔼"
//                         : header.column.getIsSorted() === "desc"
//                         ? "🔽"
//                         : null}
//                     </div>
//                   </TableHead>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHeader>

//           <TableBody>
//             {table.getRowModel().rows.map((row) => (
//               <TableRow
//                 key={row.id}
//                 className="hover:bg-blue-100/70 transition text-center"
//               >
//                 {row.getVisibleCells().map((cell) => (
//                   <TableCell
//                     key={cell.id}
//                     className="px-3 py-2 text-gray-700 align-top break-words"
//                   >
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Pagination */}
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
//           Page{" "}
//           <strong>
//             {table.getState().pagination.pageIndex + 1} of{" "}
//             {table.getPageCount()}
//           </strong>{" "}
//           — Showing {table.getRowModel().rows.length} rows
//         </div>
// {/* 
//         <button
//           onClick={() => {
//             const selected = table
//               .getSelectedRowModel()
//               .flatRows.map((r) => r.original);
//             console.log("Selected rows:", selected);
//           }}
//           className="px-3 py-1 border border-blue-300 bg-blue-50 rounded-md shadow-sm hover:bg-blue-100"
//         >
//           Log Selected
//         </button> */}
//       </div>
//     </div>
//   );
// }
"use client"; 

import React from "react";
import SmartTable from "@/components/reusable-ui-components/smart-table/smart-table";
import { SurgicalRecord } from "../type";



interface Props {
  surgical_data: SurgicalRecord[];
  isPending?: boolean;
}

export default function SurgicalComponent({
  surgical_data,
  isPending = false,
}: Props) {
  // ✅ Define columns that match SmartTable’s expected shape
  const columns = [
    {
      accessorKey: "surgery_name",
      header: "Surgery Name",
      cell: ({ getValue }: any) => getValue() ?? "---",
    },
    {
      accessorKey: "operation_date",
      header: "Operation Date",
      cell: ({ row }: any) => row.original.surgical?.operation_date ?? "---",
    },
    {
      accessorKey: "procedure_notes",
      header: "Procedure Notes",
      cell: ({ row }: any) => row.original.surgical?.procedure_notes ?? "---",
    },
    {
      accessorKey: "nature_of_anesthesia",
      header: "Anesthesia",
      cell: ({ row }: any) => row.original.surgical?.nature_of_anesthesia ?? "---",
    },
    {
      accessorKey: "remarks",
      header: "Remarks",
      cell: ({ row }: any) => row.original.surgical?.remarks ?? "---",
    },
    {
      accessorKey: "complications",
      header: "Complications",
      cell: ({ row }: any) => row.original.surgical?.complications ?? "---",
    },
    {
      accessorKey: "challenges_during_surgery",
      header: "Challenges",
      cell: ({ row }: any) =>
        row.original.surgical?.challenges_during_surgery ?? "---",
    },
  ];

  // ✅ Optional event handlers
  const handleRowClick = (row: SurgicalRecord) => {
    console.log("Row clicked:", row);
  };

  const handleCellAction = ({ action, rowData }: any) => {
    console.log("Cell action:", action, "on row:", rowData);
  };

  return (
    <SmartTable
      data={surgical_data || []}
      variant="shrink"
      isLoading={isPending}
      config={{
        title: "Surgical Records",
        description: "Details of surgical operations performed",
        columns: columns,
        columnfilterable: false,
        searchable: true,
        enablePagination: true,
        pagination: {
          pageSize: 10,
          showSizeSelector: true,
        },
      }}
      onRowClick={handleRowClick}
      onCellAction={handleCellAction}
    />
  );
}
