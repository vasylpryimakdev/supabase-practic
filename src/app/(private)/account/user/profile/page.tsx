"use client";

import usersGlobalStore, {
  IUsersGlobalStore,
} from "@/global-store/users-store";
import React from "react";

function UserProfilePage() {
  const { user } = usersGlobalStore() as IUsersGlobalStore;
  return (
    <div>
      <h1>Welcome {user?.name}! This is your profile page.</h1>
    </div>
  );
}

export default UserProfilePage;
