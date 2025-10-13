import { TabsContent } from "@/components/ui/tabs";
import InvestigationComponent from "../investigationComponent";
import MedicalComponent from "../medicalComponent";

import { Card, CardContent } from "@/components/ui/card";
import CollapsibleSectionList from "./collapsibleSectionList";
import SurgicalComponent from "../surgicalComponent";



export default function MedicalHistoryTab() {
  const sections = [
    { title: "Surgical Info", component: <SurgicalComponent  /> },
    { title: "Medical Info", component: <MedicalComponent /> },
    { title: "Investigation", component: <InvestigationComponent /> },
   
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
