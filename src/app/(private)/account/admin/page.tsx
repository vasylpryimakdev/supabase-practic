import { Button } from "@/components/ui/button";
import PageTitle from "@/components/ui/page-title";
import Link from "next/link";
import React from "react";

async function AdminPlansPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title="Plans" />
        <Button>
          <Link href="/account/admin/plans/add">Add Plan</Link>
        </Button>
      </div>
    </div>
  );
}

export default AdminPlansPage;
