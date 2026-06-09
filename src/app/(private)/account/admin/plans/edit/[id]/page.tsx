import PageTitle from "@/components/ui/page-title";
import React from "react";
import PlanForm from "../../_components/plan-form";

interface EditPlanPageProps {
  params: Promise<{ id: string }>;
}

async function EditPlanPage({ params }: EditPlanPageProps) {
  return (
    <div>
      <PageTitle title="Edit Plan" />
      <PlanForm formType="edit" />
    </div>
  );
}

export default EditPlanPage;
