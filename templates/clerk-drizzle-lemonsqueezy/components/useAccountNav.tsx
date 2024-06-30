import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from '@clerk/nextjs'

export function UserAccountNav() {

  const { user } = useUser();
  // Define a default image URL
  const defaultImageUrl = "https://avatars.dicebear.com/api/avataaars/avatar1.svg"; // Update this path to your default image


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <img
          src={user?.imageUrl}
          alt="User Avatar"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            <DropdownMenuItem>
            <p>Welcome, {user?.firstName}</p>

            </DropdownMenuItem>
            <DropdownMenuItem>
            <p>User name: {user?.username}</p>

            </DropdownMenuItem>
           
          </DropdownMenuGroup>
        <DropdownMenuSeparator />

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
