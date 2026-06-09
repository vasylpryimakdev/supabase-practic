import PageTitle from "@/components/ui/page-title";
import React from "react";
import PlanForm from "../../_components/plan-form";
import { getPlanById } from "@/actions/plans";

interface EditPlanPageProps {
  params: Promise<{ id: string }>;
}

async function EditPlanPage({ params }: EditPlanPageProps) {
  const { id } = await params;
  const response = await getPlanById(id);

  if (!response.success) {
    return <div>Plan not found</div>;
  }

  let initialValues = response.data;
  return (
    <div>
      <PageTitle title="Edit Plan" />
      <PlanForm formType="edit" initialValues={initialValues} />
    </div>
  );
}

export default EditPlanPage;
