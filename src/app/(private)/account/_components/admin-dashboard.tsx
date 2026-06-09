import React, { useEffect } from "react";
import DashboardCard from "./dashboard-card";
import { getUsersReport } from "@/actions/dashboard";
import toast from "react-hot-toast";

function AdminDashboard() {
  const [userData = {}, setUserData] = React.useState<any>({
    users_count: 0,
    customers_count: 0,
    admins_count: 0,
  });

  const [subscriptionData = {}, setSubscriptionData] = React.useState<any>({
    subscriptions_count: 0,
    revenue: 0,
  });

  const fetchData = async () => {
    try {
      const usersResportResponse: any = await getUsersReport();
      if (usersResportResponse.success) {
        setUserData(usersResportResponse.data);
      } else {
        toast.error(usersResportResponse.message);
      }
    } catch (error) {
      toast.error("An error occured while fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-sm font-bold">Users / Customers</h1>
        <div className="grid grid-cols-4 mt-2 gap-5">
          <DashboardCard
            value={userData.users_count || 0}
            name="Total Users"
            description="Total number of users"
          />

          <DashboardCard
            value={userData.customers_count || 0}
            name="Total Customers"
            description="Total number of customers"
          />

          <DashboardCard
            value={userData.admins_count || 0}
            name="Total Admins"
            description="Total number of admins"
          />
        </div>
      </div>
      <div className="mt-7">
        <h1 className="text-sm font-bold">Subscriptions</h1>
        <div className="grid grid-cols-4 mt-2 gap-5">
          <DashboardCard
            value={0}
            name="Total Subscriptions"
            description="Total number of subscriptions"
          />

          <DashboardCard
            value={0}
            name="Revenue"
            description="Total revenue generated"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
