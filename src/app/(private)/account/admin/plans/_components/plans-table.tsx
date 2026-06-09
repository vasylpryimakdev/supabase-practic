"use client";
import { IPlan } from "@/interfaces";
import React from "react";
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
import { Button } from "@/components/ui/button";
import { Trash2, Edit2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deletePlanById } from "@/actions/plans";
import toast from "react-hot-toast";

function PlansTable({ plans }: { plans: IPlan[] }) {
  const [selectedPlanToDelete, setSelectedPlanToDelete] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      setSelectedPlanToDelete(id);
      const response = await deletePlanById(id);
      if (response.success) {
        toast.success("Plan deleted successfully");
      } else {
        toast.error("Failed to delete plan");
      }
      setLoading(false);
    } catch (error) {
      setSelectedPlanToDelete("");
      setLoading(false);
    }
  };

  const columns = [
    "Name",
    "Monthly Price",
    "Quarterly Price",
    "Half Yearly Price",
    "Yearly Price",
    "Created At",
    "Actions",
  ];
  return (
    <div>
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
          {plans.map((plan) => (
            <TableRow key={plan.id}>
              <TableCell>{plan.name}</TableCell>
              <TableCell>$ {plan.monthly_price}</TableCell>
              <TableCell>$ {plan.quarterly_price}</TableCell>
              <TableCell>$ {plan.half_yearly_price}</TableCell>
              <TableCell>$ {plan.yearly_price}</TableCell>
              <TableCell>
                {dayjs(plan.created_at).format("MMM DD, YYYY hh:mm A")}
              </TableCell>
              <TableCell>
                <div className="flex gap-5">
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    onClick={() =>
                      router.push(`/account/admin/plans/edit/${plan.id}`)
                    }
                  >
                    <Edit2 size={14} />
                  </Button>

                  <Button
                    size={"icon"}
                    variant={"outline"}
                    onClick={() => handleDelete(plan.id)}
                    disabled={loading && selectedPlanToDelete === plan.id}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PlansTable;
