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
import { useUser, useStackApp, UserButton } from "@stackframe/stack";

export function UserAccountNav() {
  const app = useStackApp();
  const user = app.useUser();

  // Define a default image URL
  const defaultImageUrl = "https://avatars.dicebear.com/api/avataaars/avatar1.svg"; // Update this path to your default image


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <img
          src={user?.profileImageUrl || defaultImageUrl}
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
            <p>Welcome, {user?.displayName}</p>

            </DropdownMenuItem>
            <DropdownMenuItem>
            <p>Your e-mail: {user?.primaryEmail}</p>

            </DropdownMenuItem>
           
          </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => user?.signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
