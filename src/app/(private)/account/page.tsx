"use client";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/ui/page-title";
import usersGlobalStore, {
  IUsersGlobalStore,
} from "@/global-store/users-store";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import AdminDashboard from "./_components/admin-dashboard";

function AccountPage() {
  const { user, currentSubscription } = usersGlobalStore() as IUsersGlobalStore;

  const renderProperty = (label: string, value: any) => (
    <div className="flex justify-between">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );

  if (user?.is_admin) {
    return <AdminDashboard />;
  }

  return (
    <div>
      <PageTitle title={`Welcome ${user?.name}`} />

      {/* this message will be dynamic in the next sections */}
      {!currentSubscription && (
        <div className="flex flex-col gap-5">
          <p className="mt-5 text-sm text-gray-600">
            You do not any active subscription at the moment. Please subscribe
            to enjoy our services.
          </p>

          <Button className="w-max">
            <Link href={"account/user/purchase-plan"}>
              View Subscription Plans
            </Link>
          </Button>
        </div>
      )}

      {currentSubscription && (
        <div className="mt-7 grid grid-cols-2">
          <div className="col-span-1 p-5 border rounded border-gray-500 flex flex-col gap-2">
            <h1 className="text-sm font-semibold">
              Your Current Subscription{" "}
            </h1>
            <hr />
            {renderProperty("Subscription ID", currentSubscription?.id)}
            {renderProperty("Plan", currentSubscription?.plan?.name)}
            {renderProperty(
              "Purchased On",
              dayjs(currentSubscription?.created_at).format("MMM DD, YYYY"),
            )}
            {renderProperty(
              "Start Date",
              dayjs(currentSubscription?.start_date).format("MMM DD, YYYY"),
            )}
            {renderProperty(
              "End Date",
              dayjs(currentSubscription?.end_date).format("MMM DD, YYYY"),
            )}
            {renderProperty(
              "Total Duration",
              currentSubscription?.total_duration + " days",
            )}
            {renderProperty("Amount", currentSubscription?.amount)}
            {renderProperty("Payment Id", currentSubscription?.payment_id)}
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountPage;
