"use client";
import { getAllSubscriptionsOfUser } from "@/actions/subscriptions";
import PageTitle from "@/components/ui/page-title";
import usersGlobalStore, {
  IUsersGlobalStore,
} from "@/global-store/users-store";
import { ISubscription } from "@/interfaces";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dayjs from "dayjs";
import Spinner from "@/components/ui/spinner";

function UserSubscriptionsPage() {
  const [subscriptions, setSubscriptions] = React.useState<ISubscription[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { user } = usersGlobalStore() as IUsersGlobalStore;
  const getData = async () => {
    try {
      setLoading(true);
      const response: any = await getAllSubscriptionsOfUser(user?.id!);
      if (!response.success) {
        throw new Error(response.message);
      }
      setSubscriptions(response.data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    "Subscription ID",
    "Purchase Date",
    "Start Date",
    "End Date",
    "Plan",
    "Amount",
    "Payment Id",
  ];

  return (
    <div>
      <PageTitle title="My Subscriptions" />

      {loading && <Spinner parentHeight={150} />}

      {!subscriptions.length && !loading && (
        <p className="text-sm text-gray-600">
          You do not have any subscription at the moment.
        </p>
      )}

      {subscriptions.length > 0 && !loading && (
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              {columns.map((column) => (
                <TableHead className="font-bold" key={column}>
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  {dayjs(item.created_at).format("MMM DD, YYYY")}
                </TableCell>
                <TableCell>
                  {dayjs(item.start_date).format("MMM DD, YYYY")}
                </TableCell>
                <TableCell>
                  {dayjs(item.end_date).format("MMM DD, YYYY")}
                </TableCell>
                <TableCell>{item.plan?.name}</TableCell>
                <TableCell>$ {item.amount}</TableCell>
                <TableCell>{item.payment_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default UserSubscriptionsPage;
