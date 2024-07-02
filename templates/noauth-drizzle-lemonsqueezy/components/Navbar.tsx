import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {


  return (
    <nav
      className={cn(
        "sticky h-14 inset-x-0 top-0 z-30 border-b  bg-white/40 backdrop-blur-lg transition-all dark:bg-inherit"
      )}
    >
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex h-14 items-center justify-between border-b">
          <Link
            href="/"
            className="flex z-40 justify-center items-center gap-1"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              quality={100}
              className="w-7 h-7"
            />
            <span className="text-2xl font-semibold">Acme Inc.</span>
          </Link>
          <div className="flex gap-1 sm:gap-4 items-center">

            <MobileNav />

           

            <div className="hidden items-center space-x-4 sm:flex">


              <Link
                href="#pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>


            </div>
            <ModeToggle />


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
