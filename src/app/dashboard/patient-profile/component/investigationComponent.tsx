"use client";

import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { SmartTable } from "@/components/reusable-ui-components/smart-table";
import { Investigation } from "../type";


interface Props {
  pre_ops_data: Investigation[];
}

export default function InvestigationComponent({ pre_ops_data }: Props) {
  const columnHelper = createColumnHelper<Investigation>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("investigation_name", {
        header: "Investigation Name",
        cell: (info) => info.getValue() ?? "---",
      }),
      columnHelper.accessor("investigation_report_result", {
        header: "Reports",
        cell: (info) => info.getValue() ?? "---",
      }),
    ],
    [columnHelper]
  );

  return (
    
      <SmartTable data={pre_ops_data} columns={columns} />
    
  );
}