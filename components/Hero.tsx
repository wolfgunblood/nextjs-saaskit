import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatedShiny } from "./Shiny";
import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button";
import { AnimatedButton } from "./AnimatedButton";
import { PopupList } from "./PopupList";
import { Press } from "./Press";

const Hero = () => {
  return (
    <section className="relative mx-auto w-full max-w-screen-xl min-h-screen ">
      <div className="h-full flex flex-col justify-between px-2.5 md:px-20 mt-10 text-center sm:mt-12">
        <div className="flex flex-col items-center text-center">
          <AnimatedShiny />

          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
            Acme Inc.
          </h1>

          <p className="mt-5 max-w-prose text-lg sm:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            reiciendis.
          </p>

          <Link
            className={cn(
              buttonVariants({
                size: "default",
                className: "mt-5",
              }),
              "text-base"
            )}
            href={"/dashboard"}
          >
            Get Started
          </Link>
          {/* <div className=" absolute h-14 inset-x-0 top-0 left-0 z-30">
        <PopupList />
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
