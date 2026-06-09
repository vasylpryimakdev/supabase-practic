import React, { useEffect, useState } from "react";
import Header from "./header";
import toast from "react-hot-toast";
import { getCurrentUserFromSupabase } from "@/actions/users";
import { IUser } from "@/interfaces";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  const fetchUser = async () => {
    try {
      const response: any = await getCurrentUserFromSupabase();
      if (!response.success) {
        throw new Error(response.error);
      } else {
        setUser(response.data);

        // get and store current subscription
        const subsResponse: any = await getCurrentUserFromSupabase();
        if (subsResponse.success) {
          setUser(subsResponse.data);
        }
      }
    } catch (error: any) {
      toast.error("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Header user={user} />
      <div className="p-5">{children}</div>
    </div>
  );
}

export default PrivateLayout;
