"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import CollapsibleSectionList from "./collapsibleSectionList";
import { SurgicalData, PreOpsData } from "../../type";

interface MedicalHistoryTabProps {
  post_ops_data: SurgicalData[];
  surgical_data: SurgicalData[];
  pre_ops_data: PreOpsData[];
}

export default function MedicalHistoryTab({surgical_data, pre_ops_data }: MedicalHistoryTabProps) {
 

  return (
    <TabsContent value="medical-history">
      <Card className="mt-1">
        <CardContent className="p-2 sm:p-6">
         <CollapsibleSectionList post_ops_data={[]}  surgical_data={surgical_data}
            pre_ops_data={pre_ops_data}/>
        </CardContent>
      </Card>
    </TabsContent>
  );
}