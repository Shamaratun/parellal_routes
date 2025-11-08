"use client";

import React, { useMemo } from "react";
import { PreOpsData } from "../type";
import SmartTableSimple from "@/components/reusable-ui-components/smart-table/smart-table";

interface Props {
  pre_ops_data: PreOpsData[];
  isPending?: boolean;
}

export default function InvestigationComponent({
  pre_ops_data,
  isPending = false,
}: Props) {
  // ✅ Flatten investigations safely
  const flattenedData = useMemo(() => {
    return pre_ops_data.flatMap((item) => {
      const invList = item.investigations;

      if (!invList || invList.length === 0) return [];

      return invList.map((inv) => ({
     
        investigation_name: inv.investigation_name,
        investigation_report_result: inv.investigation_report_result,
      }));
    });
  }, [pre_ops_data]);
 
  const columns = [
    {
      id: "investigation_name",
      header: "Investigation Name",
      accessorKey: "investigation_name",
      cell: ({ getValue }: any) => getValue() || "---",
    },
    {
      id: "investigation_report_result",
      header: "Report Result",
      accessorKey: "investigation_report_result",
      cell: ({ getValue }: any) => getValue() || "---",
    },
   
  ];

  const handleRowClick = (row: any) => {
    console.log("Row clicked:", row);
  };

  const handleCellAction = ({ action, rowData }: any) => {
    console.log("Cell action:", action, "on row:", rowData);
  };

   return (
    <SmartTableSimple
      data={flattenedData || []}
      variant="regular"
      isLoading={isPending}
      config={{
        title: "Investigations",
        // description: "Pre-operative investigation results",
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
// "use client";

// import React, { useMemo } from "react";
// import { PreOpsData } from "../type";
// import SmartTableSimple from "@/components/reusable-ui-components/smart-table/smart-table";

// interface Props {
//   pre_ops_data: PreOpsData[];
//   isPending?: boolean;
// }

// export default function InvestigationComponent({ pre_ops_data, isPending = false }: Props) {
//   // ✅ Safely normalize investigations (handle object or array)
//   const flattenedData = useMemo(() => {
//     return pre_ops_data.flatMap((item) => {
//       const inv = item.investigations;
//       if (!inv) return []; // no investigation data

//       // If investigations is an array → return directly
//       if (Array.isArray(inv)) {
//         return inv.map((i) => ({
//           investigation_name: i.investigation_name,
//           investigation_report_result: i.investigation_report_result,
          
//         }));
//       }

//       // If investigations is a single object → wrap it in an array
//       return [
//         {
//           investigation_name: inv.investigation_name,
//           investigation_report_result: inv.investigation_report_result
          
//         },
//       ];
//     });
//   }, [pre_ops_data]);

//   // ✅ Table columns
//   const columns = [
//     {
//       id: "investigation_name",
//       header: "Investigation Name",
//       accessorKey: "investigation_name",
//       cell: ({ getValue }: any) => getValue() || "---",
//     },
//     {
//       id: "investigation_report_result",
//       header: "Report Result",
//       accessorKey: "investigation_report_result",
//       cell: ({ getValue }: any) => getValue() || "---",
//     },
//     // {
//     //   id: "insert_date",
//     //   header: "Insert Date",
//     //   accessorKey: "insert_date",
//     //   cell: ({ getValue }: any) => getValue() || "---",
//     // },
//   ];

//   const handleRowClick = (row: any) => {
//     console.log("Row clicked:", row);
//   };

//   const handleCellAction = ({ action, rowData }: any) => {
//     console.log("Cell action:", action, "on row:", rowData);
//   };
//   return (
//     <SmartTableSimple
//       data={pre_ops_data || []}
//       variant="shrink"
//       isLoading={isPending}
//       config={{
//         title: "Investigations",
//         // description: "Pre-operative investigation results",
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
