import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import CollapsibleSectionList from "./collapsibleSectionList";
import SurgicalComponent from "../surgicalComponent";
import MedicalComponent from "../medicalComponent";
import PreSurgicalInvestigations from "../investigationComponent";
import { SurgicalData, PreSurgicalData } from "../../type";
import PostOpsTable from "../surgicalComponent";
import PreOpsTable from "../investigationComponent";

interface MedicalHistoryTabProps {
  post_ops_data: SurgicalData[];
  pre_ops_data: PreSurgicalData[];
}

export default function MedicalHistoryTab({ post_ops_data, pre_ops_data }: MedicalHistoryTabProps) {
  const sections = [
    {
      title: "Surgical Info",
      component: <PostOpsTable postOps={post_ops_data} />
    },
    {
      title: "Medical Info",
      component: <MedicalComponent />,
    },
    {
      title: "Investigation",
      component: <PreOpsTable preOps={pre_ops_data} />
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
