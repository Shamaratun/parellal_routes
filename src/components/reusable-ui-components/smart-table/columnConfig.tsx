import { Button } from "@/components/ui/button";
import { TableColumn } from "./smart-table";
import { safeFormatDate } from "@/lib/utils";

export const ColumnsConfig: TableColumn[] = [
  {
    id: "",
    accessorKey: "status",
    header: "",
    cell: ({ row, onCellAction }) => (
      <Button
        variant="outline"
        className="bg-green-100 hover:bg-green-200 text-green-700 border-green-300 px-3 py-1 text-xs font-semibold"
        onClick={(e) => {
          e.stopPropagation(); // Prevent row click
          // ✅ Use the onCellAction handler
          onCellAction("status_click", row);
        }}
      >
        {row.original.status || "Discharge"}
      </Button>
    ),
    width: 90,
  },
  {
    id: "profile",
    header: "",
    accessorKey: "profile",
    cell: ({ row, onCellAction }) => (
      <Button
        variant="default"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1"
        onClick={(e) => {
          e.stopPropagation(); // Prevent row click
          // ✅ Use the onCellAction handler
          onCellAction("view_profile", row);
        }}
      >
        Profile
      </Button>
    ),
    width: 80,
  },
  {
    id: "edit",
    header: "",
    accessorKey: "edit",
    cell: ({ row, onCellAction }) => (
      <Button
        variant="default"
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1"
        onClick={(e) => {
          e.stopPropagation(); // Prevent row click
          // ✅ Use the onCellAction handler
          onCellAction("edit", row);
        }}
      >
        Edit
      </Button>
    ),
    width: 60,
  },
  // {
  //   id: "Add-surgical-data",
  //   header: "",
  //   cell: ({ row, onCellAction }) => (
  //     <Button
  //       variant="default"
  //       className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1"
  //       onClick={(e) => {
  //         e.stopPropagation(); // Prevent row click
  //         // ✅ Use the onCellAction handler
  //         onCellAction("add_surgical_data", row);
  //       }}
  //     >
  //       Add Surgical Data
  //     </Button>
  //   ),
  //   width: 150,
  // },
  {
    id: "patient_name",
    accessorKey: "patient_name",
    header: "Name",
    searchable: true,
    sortable: false,
    width: 150,
  },
  {
    id: "patient_id",
    accessorKey: "patient_id",
    header: "Pat Id",
    searchable: true,
    sortable: false,
    width: 80,
  },
  {
    id: "mobile_number",
    accessorKey: "mobile_number",
    header: "Phone",
    searchable: true,
    width: 100,
  },
  {
    id: "age",
    accessorKey: "age",
    header: "Age",
    meta: { isNumeric: true },
    width: 80,
  },

  // {
  //   id: "admission_id",
  //   accessorKey: "admission_id",
  //   header: "Admission Id",
  //   searchable: true,
  //   sortable: false,
  //   width: 80,
  // },
  // {
  //   id: "admission_date",
  //   accessorKey: "admission_date",
  //   header: "Adm. date",
  //   searchable: true,
  //   sortable: false,
  //   width: 80,
  // },

  // {
  //   id: "Address",
  //   accessorKey: "address",
  //   header: "Address",
  //   searchable: true,
  //   width: 250,
  // },
  {
    id: "surgery_name",
    accessorKey: "surgery_name",
    header: "Name Of Surgery",
    searchable: true,
    sortable: true,
    width: 230,
  },
  {
    id: "surgery_date",
    accessorKey: "surgery_date",
    header: "Surgery Date",
    searchable: true,
    sortable: true,
    width: 90,
    cell: ({ row }) => safeFormatDate(row.original.surgery_date)
  },
  {
    id: "hospital_name",
    accessorKey: "hospital_name",
    header: "Hospital",
    searchable: true,
    sortable: false,
    width: 200,
  },
];