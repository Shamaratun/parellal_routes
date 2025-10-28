// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// import SurgicalComponent from "../surgicalComponent"
// import MedicalComponent from "../medicalComponent"
// import InvestigationComponent from "../investigationComponent"
// import { PreOpsData, SurgicalData } from "../../type";
// import React from "react";

// interface MedicalHistoryTabProps {
//   post_ops_data: SurgicalData[];
//   surgical_data: SurgicalData[];
//   pre_ops_data: PreOpsData[];

// }


// export default function CollapsibleSectionList({surgical_data, pre_ops_data }: MedicalHistoryTabProps) {
//    const [isOpen, setIsOpen] = React.useState(true)
//   return (
//     <div className="flex p-8 flex-wrap gap-4">
//       {/* Surgical Info */}
//       <Collapsible defaultValue="medical-history" open={isOpen}
//       onOpenChange={setIsOpen}
//       className="flex w-[350px] flex-col gap-2">
//         <CollapsibleTrigger className="w-[48%] bg-blue-100 text-blue-800 font-normal text-2xl text-center py-2 rounded-lg shadow hover:bg-blue-200 transition">
//           Surgical Information
//         </CollapsibleTrigger>
//         <CollapsibleContent className="w-full scroll-auto">
//           <SurgicalComponent surgical_data={surgical_data} pre_ops_data={pre_ops_data} />
//         </CollapsibleContent>
//       </Collapsible>

//       {/* Medical Info */}
//       <Collapsible  defaultValue="medical-history" open={isOpen}
//       onOpenChange={setIsOpen}
//       className="flex w-full flex-col gap-2">
//         <CollapsibleTrigger className="w-[48%] bg-blue-100 text-blue-800 font-normal text-2xl text-center py-2 rounded-lg shadow hover:bg-blue-200 transition">
//           Medical Information
//         </CollapsibleTrigger>
//         <CollapsibleContent className="w-full scroll-auto">
//           <MedicalComponent profile={{ pre_ops_data }} />
//         </CollapsibleContent>
//       </Collapsible>

//       {/* Investigation Info */}
//       <Collapsible defaultValue="medical-history" open={isOpen}
//       onOpenChange={setIsOpen}
//       className="flex w-[350px] flex-col gap-2">
//         <CollapsibleTrigger className="w-[48%] bg-blue-100 text-blue-800 font-normal text-2xl text-center py-2 rounded-lg shadow hover:bg-blue-200 transition">
//           Investigation Details
//         </CollapsibleTrigger>
//         <CollapsibleContent className="w-full scroll-auto">
//           <InvestigationComponent profile={{ pre_ops_data }} />
//         </CollapsibleContent>
//       </Collapsible>
//     </div>
//   );
// }
"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SurgicalComponent from "../surgicalComponent";
import MedicalComponent from "../medicalComponent";
import InvestigationComponent from "../investigationComponent";
import { PreOpsData, SurgicalRecord } from "../../type";
import React from "react";

interface MedicalHistoryTabProps {
  surgical_data: SurgicalRecord[];
  pre_ops_data: PreOpsData[];
}

export default function CollapsibleSectionList({
  surgical_data,
  pre_ops_data,
}: MedicalHistoryTabProps) {
  // Separate states for multi-open
  const [isSurgicalOpen, setIsSurgicalOpen] = React.useState(true);
  const [isMedicalOpen, setIsMedicalOpen] = React.useState(true);
  const [isInvestigationOpen, setIsInvestigationOpen] = React.useState(true);

  return (
    <div className="flex p-0.5 flex-wrap gap-4">

      <Collapsible
        open={isSurgicalOpen}
        onOpenChange={setIsSurgicalOpen}
        className="flex w-[350px] flex-col gap-2"
      >
        <CollapsibleTrigger className="w-[48%] bg-blue-100 text-blue-800 font-normal text-2xl text-center py-2 rounded-lg shadow hover:bg-blue-200 transition">
          Surgical Information
        </CollapsibleTrigger>
        <CollapsibleContent className=" pt-1 w-full scroll-auto">
          <SurgicalComponent
            surgical_data={surgical_data}

          />
        </CollapsibleContent>
      </Collapsible>

      {/* Medical Info */}
      <Collapsible
        open={isMedicalOpen}
        onOpenChange={setIsMedicalOpen}
        className="flex w-[350px] flex-col gap-2"
      >
        <CollapsibleTrigger className="w-[48%] bg-blue-100 text-blue-800 font-normal text-2xl text-center py-2 rounded-lg shadow hover:bg-blue-200 transition">
          Medical Information
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-1 w-full scroll-auto">
          <MedicalComponent pre_ops_data={pre_ops_data}
          />        </CollapsibleContent>
      </Collapsible>

      {/* Investigation Info */}
      <Collapsible
        open={isInvestigationOpen}
        onOpenChange={setIsInvestigationOpen}
        className="flex w-[350px] flex-col gap-2"
      >
        <CollapsibleTrigger className="w-[48%] bg-blue-100 text-blue-800 font-normal text-2xl text-center py-2 rounded-lg shadow hover:bg-blue-200 transition">
          Investigation Details
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-1 w-full scroll-auto">
          <InvestigationComponent pre_ops_data={pre_ops_data} />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
