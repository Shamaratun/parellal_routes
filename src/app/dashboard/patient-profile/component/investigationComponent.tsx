"use client";

import React from "react";
import SmartTable from "@/components/reusable-ui-components/smart-table/smart-table";
import { PreOpsData } from "../type";


interface Props {

 pre_ops_data: PreOpsData[];
  isPending?: boolean; 
}

export default function InvestigationComponent({ pre_ops_data, isPending = false }: Props) {

 const columns = [
  {
    accessorKey: "investigation_name",
    header: "Investigation Name",
    sortable: false,
    cell: ({ getValue }: any) => getValue() ?? "---",
  },
  {
    accessorKey: "investigation_report_result",
    header: "Reports",
    sortable: false,
    cell: ({ getValue }: any) => getValue() ?? "---",
  },
];

  const handleRowClick = (row: PreOpsData) => {
    console.log("Row clicked:", row);
  };


  const handleCellAction = ({ action, rowData }: any) => {
    console.log("Cell action:", action, "on row:", rowData);
  };

  return (
    <SmartTable
      data={pre_ops_data || []}
      variant="shrink"
      isLoading={isPending}
      config={{
        title: "Investigations",
        description: "Pre-operative investigation results",
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
