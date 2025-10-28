"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import CollapsibleSectionList from "./collapsibleSectionList";
import { SurgicalRecord, PreOpsData } from "../../type";

interface MedicalHistoryTabProps {
  surgical_data: SurgicalRecord[];
  pre_ops_data: PreOpsData[];
}

export default function MedicalHistoryTab({ surgical_data, pre_ops_data }: MedicalHistoryTabProps) {


  return (
    <TabsContent value="medical-history">
      <Card className="mt-1">
        <CardContent className="p-2 sm:p-6">
          <CollapsibleSectionList
            surgical_data={surgical_data}
            pre_ops_data={pre_ops_data} />
        </CardContent>
      </Card>
    </TabsContent>
  );
}