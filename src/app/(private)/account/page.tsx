"use client";

import PageTitle from "@/components/ui/page-title";
import usersGlobalStore, {
  IUsersGlobalStore,
} from "@/global-store/users-store";

import React from "react";

function AccountPage() {
  const { user } = usersGlobalStore() as IUsersGlobalStore;

  return (
    <div>
      <PageTitle title={`Welcome ${user?.name}`} />
    </div>
  );
}

export default AccountPage;
