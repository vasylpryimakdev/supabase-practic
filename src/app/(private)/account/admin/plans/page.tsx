import { getAllPlans } from "@/actions/plans";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/ui/page-title";
import Link from "next/link";
import React from "react";
import PlansTable from "./_components/plans-table";

async function AdminPlansPage() {
  const response: any = await getAllPlans();
  if (!response.success) {
    return <div>{response.message}</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title="Plans" />
        <Button>
          <Link href="/account/admin/plans/add">Add Plan</Link>
        </Button>
      </div>

      <PlansTable plans={response.data} />
    </div>
  );
}

export default AdminPlansPage;
