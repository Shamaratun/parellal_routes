"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import CollapsibleSectionList from "./collapsibleSectionList";
import SurgicalComponent from "../surgicalComponent";
import MedicalComponent from "../medicalComponent";
import PreOpsTable from "../investigationComponent"; // renamed for clarity
import { SurgicalData, PreOpsData } from "../../type";
import InvestigationsTable from "../investigationComponent";
import { useState } from "react";
import InvestigationComponent from "../investigationComponent";

interface MedicalHistoryTabProps {
  post_ops_data: SurgicalData[];

  pre_ops_data: PreOpsData[];
}

export default function MedicalHistoryTab({ post_ops_data, pre_ops_data }: MedicalHistoryTabProps) {

   const sections = [
  {
    title: "Surgical Info",
    component: <SurgicalComponent postOps={post_ops_data} />,
  },
  {
    title: "Medical Info",
    component: <MedicalComponent profile={{ pre_ops_data }} />, // without investigations
  },
  {
    title: "Investigation",
    component: <InvestigationComponent profile={{ pre_ops_data }} />, // only investigations
  },
];

  return (
    <TabsContent value="medical-history">
      <Card className="mt-4">
        <CardContent className="p-4 sm:p-6">
          <CollapsibleSectionList sections={sections} />
        </CardContent>
      </Card>
    </TabsContent>
  );
}



// "use client";
// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { PreOpsData } from "../../type";



// interface PostOpsData {
//   id: number;
//   remarks?: string | null;
// }

// interface Props {
//   pre_ops_data: PreOpsData[] | null;
//   post_ops_data: PostOpsData[] | null;
// }

// const MedicalHistoryTab: React.FC<Props> = ({ pre_ops_data, post_ops_data }) => {
//   const preOps = pre_ops_data || [];
//   const postOps = post_ops_data || [];

//   return (
//     <div className="grid gap-6 mt-4">
//       {/* Pre-Operative Info */}
//       {preOps.length > 0 && (
//         <Card>
//           <CardHeader>
//             <CardTitle>Pre-Operative Data</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {preOps.map((item) => (
//               <div key={item.id} className="border-b py-3">
//                 <p><strong>Diagnosis:</strong> {(item.diagnosis_id || []).join(", ")}</p>
//                 <p><strong>Comorbidities:</strong> {(item.co_morbidities_id || []).join(", ")}</p>
//                 <p><strong>Drug History:</strong> {(item.drug_history || []).join(", ")}</p>
//                 {item.investigations && (
//                   <div>
//                     <strong>Investigations:</strong>
//                     <ul className="list-disc list-inside">
//                       {Object.entries(item.investigations).map(([key, val]) => (
//                         <li key={key}>{key}: {val}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//                 <p><strong>Remarks:</strong> {item.remarks || "N/A"}</p>
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       )}

//       {/* Post-Operative Info */}
//       {postOps.length > 0 && (
//         <Card>
//           <CardHeader>
//             <CardTitle>Post-Operative / Surgical Data</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {postOps.map((item) => (
//               <div key={item.id} className="border-b py-3">
//                 <p><strong>ID:</strong> {item.id}</p>
//                 <p><strong>Remarks:</strong> {item.remarks || "N/A"}</p>
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       )}

//       {/* Fallback */}
//       {preOps.length === 0 && postOps.length === 0 && (
//         <p className="text-sm text-gray-500">No medical history available.</p>
//       )}
//     </div>
//   );
// };

// export default MedicalHistoryTab;
