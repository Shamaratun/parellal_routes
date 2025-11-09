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
