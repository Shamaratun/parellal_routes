"use client";

import React from "react";
import SmartTable from "@/components/reusable-ui-components/smart-table/smart-table";
import { PreOpsData } from "../type";

interface Drug {
  drug_name: string;
  dose: string;
  frequency: string;
}


interface Props {
  pre_ops_data: PreOpsData[];
  isPending?: boolean;
}


const joinOrNA = (arr?: string[]) =>
  arr && arr.length > 0 ? arr.join(", ") : "--";


const parseDrugs = (list?: string[]): Drug[] =>
  list
    ?.map((d) => {
      try {
        return JSON.parse(d) as Drug;
      } catch {
        return undefined;
      }
    })
    .filter((d): d is Drug => !!d) ?? [];

export default function MedicalComponent({
  pre_ops_data,
  isPending = false,
}: Props) {
  const columns = [
    {
      accessorKey: "id",
      header: "Record ID",
      cell: ({ getValue }: any) => getValue() ?? "--",
    },
    {
      accessorKey: "co_morbidities_id",
      header: "Co-morbidities",
      cell: ({ getValue }: any) => joinOrNA(getValue()),
    },
    {
      accessorKey: "diagnosis_id",
      header: "Diagnosis",
      cell: ({ getValue }: any) => joinOrNA(getValue()),
    },
    {
      accessorKey: "surgical_history",
      header: "Surgical History",
      cell: ({ getValue }: any) => getValue() ?? "--",
    },
    {
      accessorKey: "remarks",
      header: "Remarks",
      cell: ({ getValue }: any) => {
        const val = getValue();
        return Array.isArray(val) ? joinOrNA(val) : val ?? "--";
      },
    },
    {
      accessorKey: "drug_history",
      header: "Drug History",
      cell: ({ getValue }: any) => {
        const drugs = parseDrugs(getValue());
        if (drugs.length === 0)
          return <span className="text-gray-500 italic">No drugs</span>;

        return (
          <div className="border border-gray-200 rounded-lg p-2 bg-gray-50">
            <table className="min-w-full text-sm text-left">
              <thead className="border-b text-gray-700 font-semibold">
                <tr>
                  <th className="pr-3">Drug Name</th>
                  <th className="pr-3">Dose</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {drugs.map((drug, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="pr-3">{drug.drug_name || "---"}</td>
                    <td className="pr-3">{drug.dose || "---"}</td>
                    <td>{drug.frequency || "---"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      },
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
        title: "Pre-Operative Medical Records",
        description: "Detailed pre-operative information and drug history",
        columns,
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