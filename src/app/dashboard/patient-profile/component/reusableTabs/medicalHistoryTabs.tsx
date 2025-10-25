"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import CollapsibleSectionList from "./collapsibleSectionList";
import SurgicalComponent from "../surgicalComponent";
import MedicalComponent from "../medicalComponent";
import { SurgicalData, PreOpsData } from "../../type";
import InvestigationComponent from "../investigationComponent";

interface MedicalHistoryTabProps {
  post_ops_data: SurgicalData[];
  surgical_data: SurgicalData[];
  pre_ops_data: PreOpsData[];
}

export default function MedicalHistoryTab({surgical_data, pre_ops_data }: MedicalHistoryTabProps) {
   const sections = [
  {
    title: "Surgical Information",
    component: <SurgicalComponent profile={{ surgical_data }} />,
  },
  {
    title: "Medical Information",
    component: <MedicalComponent profile={{ pre_ops_data }} />,
  },
  {
    title: "Investigation Details",
    component: <InvestigationComponent profile={{ pre_ops_data }} />, 
  },
];

  return (
    <TabsContent value="medical-history">
      <Card className="mt-1">
        <CardContent className="p-2 sm:p-6">
          <CollapsibleSectionList sections={sections} />
        </CardContent>
      </Card>
    </TabsContent>
  );
}


