import InvestigationComponent from "./investigationComponent";
import MedicalComponent from "./medicalComponent";
import SurgicalComponent from "./surgicalComponent";
import CollapsibleSectionList from "./reusableTabs/collapsibleSectionList";
import RecentVisitComponent from "./recentVisitComponent";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";



export default function MedicalHistoryTab() {
  const sections = [
    { title: "Surgical Info", component: <SurgicalComponent /> },
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
