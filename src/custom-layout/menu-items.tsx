import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
} from "@/components/ui/sheet";
import { IUser } from "@/interfaces";
import { SignOutButton } from "@clerk/nextjs";
import {
  FolderKanban,
  Heart,
  Home,
  List,
  LogOut,
  ShieldCheck,
  User2,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface IMenuItemsProps {
  user: IUser;
  openMenuItems: boolean;
  setOpenMenuItems: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuItems({ user, openMenuItems, setOpenMenuItems }: IMenuItemsProps) {
  const iconSize = 15;

  const pathname = usePathname();
  const router = useRouter();
  const userMenuItems = [
    {
      name: "Home",
      icon: <Home size={iconSize} />,
      route: "/account",
    },
    {
      name: "Profile",
      icon: <User2 size={iconSize} />,
      route: "/account/user/profile",
    },
    {
      name: "My Subscriptions",
      icon: <ShieldCheck size={iconSize} />,
      route: "/account/user/subscriptions",
    },
    {
      name: "Referrals",
      icon: <Heart size={iconSize} />,
      route: "/account/user/referrals",
    },
  ];

  const adminMenuItems = [
    {
      name: "Home",
      icon: <Home size={iconSize} />,
      route: "/account",
    },
    {
      name: "Plans",
      icon: <FolderKanban size={iconSize} />,
      route: "/account/admin/plans",
    },
    {
      name: "Users",
      icon: <User2 size={iconSize} />,
      route: "/account/admin/users",
    },
    {
      name: "Subscriptions",
      icon: <ShieldCheck size={iconSize} />,
      route: "/account/admin/subscriptions",
    },
    {
      name: "Customers",
      icon: <List size={iconSize} />,
      route: "/account/admin/customers",
    },
    {
      name: "Referrals",
      icon: <Heart size={iconSize} />,
      route: "/account/user/referrals",
    },
  ];

  let menuItemsToRender = user.is_admin ? adminMenuItems : userMenuItems;

  return (
    <Sheet open={openMenuItems} onOpenChange={setOpenMenuItems}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-10 mt-20">
          {menuItemsToRender.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 cursor-pointer rounded ${
                pathname === item.route
                  ? "bg-gray-100 border border-gray-500"
                  : ""
              }`}
              onClick={() => {
                router.push(item.route);
                setOpenMenuItems(false);
              }}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </div>
          ))}

          <SignOutButton>
            <Button>
              <LogOut size={iconSize} />
              Sign Out
            </Button>
          </SignOutButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MenuItems;
