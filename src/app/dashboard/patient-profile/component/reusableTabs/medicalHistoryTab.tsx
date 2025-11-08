"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

import { SurgicalRecord, PreOpsData } from "../../type";
import SurgicalComponent from "../surgicalComponent";
import MedicalComponent from "../medicalComponent";
import InvestigationComponent from "../investigationComponent";

interface MedicalHistoryTabProps {
  surgical_data: SurgicalRecord[];
  pre_ops_data: PreOpsData[];

}

export default function MedicalHistoryTab({ surgical_data, pre_ops_data }: MedicalHistoryTabProps) {


  return (
    <TabsContent value="medical-history">
      <Card >
        <CardContent>
          <SurgicalComponent surgical_data={surgical_data} />
          <MedicalComponent pre_ops_data={pre_ops_data} />
          <InvestigationComponent pre_ops_data={pre_ops_data} />
        </CardContent>
      </Card>
    </TabsContent>
  );
}