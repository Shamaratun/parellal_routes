
// "use client"; 

// import React from "react";
// import SmartTable from "@/components/reusable-ui-components/smart-table/smart-table";
// import { SurgicalRecord } from "../type";



// interface Props {
//   surgical_data: SurgicalRecord[];
//   isPending?: boolean;
// }

// export default function SurgicalComponent({
//   surgical_data,
//   isPending = false,
// }: Props) {
  
//   const columns = [
//     {
//       accessorKey: "surgery_name",
//       header: "Surgery Name",
//       cell: ({ getValue }: any) => getValue() ?? "---",
//     },
//     {
//       accessorKey: "operation_date",
//       header: "Operation Date",
//       cell: ({ row }: any) => row.original.surgical?.operation_date ?? "---",
//     },
//     {
//       accessorKey: "procedure_notes",
//       header: "Procedure Notes",
//       cell: ({ row }: any) => row.original.surgical?.procedure_notes ?? "---",
//     },
//     {
//       accessorKey: "nature_of_anesthesia",
//       header: "Anesthesia",
//       cell: ({ row }: any) => row.original.surgical?.nature_of_anesthesia ?? "---",
//     },
//     {
//       accessorKey: "remarks",
//       header: "Remarks",
//       cell: ({ row }: any) => row.original.surgical?.remarks ?? "---",
//     },
//     {
//       accessorKey: "complications",
//       header: "Complications",
//       cell: ({ row }: any) => row.original.surgical?.complications ?? "---",
//     },
//     {
//       accessorKey: "challenges_during_surgery",
//       header: "Challenges",
//       cell: ({ row }: any) =>
//         row.original.surgical?.challenges_during_surgery ?? "---",
//     },
//   ];


//   const handleRowClick = (row: SurgicalRecord) => {
//     console.log("Row clicked:", row);
//   };

//   const handleCellAction = ({ action, rowData }: any) => {
//     console.log("Cell action:", action, "on row:", rowData);
//   };

//   return (
//     <SmartTable
//       data={surgical_data || []}
//       variant="shrink"
//       isLoading={isPending}
//       config={{
//         // title: "Surgical Records",
//         // description: "Details of surgical operations performed",
//         columns: columns,
//         columnfilterable: false,
//         searchable: false,
//         enablePagination: true,
//         pagination: {
//           pageSize: 10,
//           showSizeSelector: true,
//         },
//       }}
//       onRowClick={handleRowClick}
//       onCellAction={handleCellAction}
//     />
//   );
// }

"use client"; 

import React from "react";
import { SurgicalRecord } from "../type";
import SmartTableSimple from "@/components/reusable-ui-components/smart-table/smart-table";



interface Props {
  surgical_data: SurgicalRecord[];
  isPending?: boolean;
}

export default function SurgicalComponent({
  surgical_data,
  isPending = false,
}: Props) {
  
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


  const handleRowClick = (row: SurgicalRecord) => {
    console.log("Row clicked:", row);
  };

  const handleCellAction = ({ action, rowData }: any) => {
    console.log("Cell action:", action, "on row:", rowData);
  };

  return (
    <SmartTableSimple
      data={surgical_data || []}
      variant="regular"
      isLoading={isPending}
      config={{
        title: "Surgical Records",
        // description: "Details of surgical operations performed",
        columns: columns,
        columnfilterable: false,
        searchable: false,
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
