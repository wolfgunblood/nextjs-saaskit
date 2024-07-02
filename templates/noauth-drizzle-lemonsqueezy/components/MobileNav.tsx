import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { SideNav } from "@/components/SideNav";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden pr-4">
        <Menu />
      </SheetTrigger>

      <SheetContent side="right" className="p-0 pt-5 w-32">
        <SheetClose />
        <SideNav />
      </SheetContent>
    </Sheet>
  );
};
