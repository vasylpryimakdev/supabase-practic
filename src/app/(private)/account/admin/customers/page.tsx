'use client'
import { getAllCustomers } from "@/actions/users";
import PageTitle from "@/components/ui/page-title";
import Spinner from "@/components/ui/spinner";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table
} from "@/components/ui/table";
import { IUser } from "@/interfaces";
import React from "react";
import toast from "react-hot-toast";

function AdminCustomersList() {
  const [loading = true, setLoading] = React.useState<boolean>(true);
  const [customers = [], setCustomers] = React.useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response: any = await getAllCustomers();
      if (!response.success) {
        toast.error("Failed to fetch customers");
      }
      setCustomers(response.data);
    } catch (error) {
      toast.error("Failed to fetch customers");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const columns = ["Customer ID", "Name", "Email"];

  return (
    <div>
      <PageTitle title="Customers" />

      {loading && <Spinner parentHeight={150} />}

      {!customers.length && !loading && (
        <p className="text-sm text-gray-600">
          You do not have any customers at the moment.
        </p>
      )}

      {customers.length > 0 && !loading && (
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
            {customers.map((item: IUser) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default AdminCustomersList;
