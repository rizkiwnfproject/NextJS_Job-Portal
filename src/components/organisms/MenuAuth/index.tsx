import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { ChevronDown, LogOut } from "lucide-react";

const MenuAuth = () => {
  const { data: session } = useSession();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="inline-flex items-center gap-1 text-primary">
            <div className="font-semibold">Hai, {session?.user.name}</div>
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => signOut()}
            className="text-destructive font-semibold"
          >
            <LogOut className="text-destructive" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MenuAuth;
