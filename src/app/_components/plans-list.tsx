import { getAllPlans } from "@/actions/plans";
import { IPlan } from "@/interfaces";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function PlansList() {
  const [plans = [], setPlans] = React.useState<IPlan[]>([]);

  const fetchPlans = async () => {
    try {
      const response: any = await getAllPlans();
      if (response.success) {
        // sort plans by monthy price
        const sortedPlans = response.data.sort(
          (a: IPlan, b: IPlan) => a.monthly_price - b.monthly_price,
        );
        setPlans(sortedPlans);
      } else {
        setPlans([]);
      }
    } catch (error) {
      toast.error("Failed to fetch plans");
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="justify-between p-5 border border-gray-300 hover:border-yellow-600 flex flex-col gap-3 rounded-lg cursor-pointer"
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold text-white">{plan.name}</h1>
            <img
              src={plan.images[0]}
              alt={plan.name}
              className="h-40 w-full rounded"
            />
            <p className="text-xs font-semibold text-gray-400 line-clamp-3">
              {plan.description}
            </p>

            <hr />

            <h1 className="text-sm font-semibold text-gray-300">Features</h1>

            <ul className="flex flex-col gap-2 mt-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-xs text-gray-400 line-clamp-1">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <hr />

          <h1 className="text-xl font-bold text-green-600">
            Starts at $ {plan.monthly_price} / month
          </h1>
        </div>
      ))}
    </div>
  );
}

export default PlansList;
